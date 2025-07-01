
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Upload, FileText, X } from "lucide-react";

interface PDFUploadProps {
  onDocumentUploaded: (documentId: string) => void;
}

const PDFUpload = ({ onDocumentUploaded }: PDFUploadProps) => {
  const [uploading, setUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { toast } = useToast();

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === "application/pdf") {
      setSelectedFile(file);
    } else {
      toast({
        title: "Invalid File",
        description: "Please select a PDF file",
        variant: "destructive",
      });
    }
  };

  const uploadPDF = async () => {
    if (!selectedFile) return;

    setUploading(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("Not authenticated");

      const fileExt = selectedFile.name.split('.').pop();
      const fileName = `${user.id}/${Date.now()}.${fileExt}`;

      // Upload to storage
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('documents')
        .upload(fileName, selectedFile);

      if (uploadError) throw uploadError;

      // Extract text from PDF using a simple approach (in a real implementation, you'd use a proper PDF parser)
      const text = await extractTextFromPDF(selectedFile);

      // Save document metadata
      const { data: docData, error: docError } = await supabase
        .from('documents')
        .insert({
          user_id: user.id,
          filename: fileName,
          original_name: selectedFile.name,
          file_size: selectedFile.size,
          mime_type: selectedFile.type,
          storage_path: uploadData.path,
          extracted_text: text,
        })
        .select()
        .single();

      if (docError) throw docError;

      toast({
        title: "Success",
        description: "PDF uploaded and processed successfully",
      });

      onDocumentUploaded(docData.id);
      setSelectedFile(null);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setUploading(false);
    }
  };

  const extractTextFromPDF = async (file: File): Promise<string> => {
    // Basic text extraction - in production, use a proper PDF parsing library
    // For now, we'll return a placeholder that indicates processing is needed
    return `PDF content from ${file.name} - Text extraction would be implemented with a proper PDF parsing library`;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="h-5 w-5" />
          Upload PDF Document
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
          {selectedFile ? (
            <div className="flex items-center justify-between bg-gray-50 p-3 rounded">
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span className="text-sm">{selectedFile.name}</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedFile(null)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <>
              <Upload className="h-8 w-8 mx-auto mb-2 text-gray-400" />
              <p className="text-sm text-gray-600 mb-2">
                Select a PDF document to upload
              </p>
              <Input
                type="file"
                accept=".pdf"
                onChange={handleFileSelect}
                className="max-w-xs mx-auto"
              />
            </>
          )}
        </div>

        {selectedFile && (
          <Button 
            onClick={uploadPDF} 
            disabled={uploading}
            className="w-full"
          >
            {uploading ? "Processing..." : "Upload & Process PDF"}
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default PDFUpload;
