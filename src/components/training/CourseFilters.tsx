import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, RotateCcw } from "lucide-react";

interface CourseFiltersProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedStatuses: string[];
  onStatusChange: (status: string) => void;
  selectedDurations: string[];
  onDurationChange: (duration: string) => void;
  selectedPracticeAreas: string[];
  onPracticeAreaChange: (area: string) => void;
  selectedLevels: string[];
  onLevelChange: (level: string) => void;
  practiceAreas: string[];
  onReset: () => void;
}

export const CourseFilters = ({
  searchQuery,
  onSearchChange,
  selectedStatuses,
  onStatusChange,
  selectedDurations,
  onDurationChange,
  selectedPracticeAreas,
  onPracticeAreaChange,
  selectedLevels,
  onLevelChange,
  practiceAreas,
  onReset,
}: CourseFiltersProps) => {
  const hasActiveFilters = 
    searchQuery.length > 0 ||
    selectedStatuses.length > 0 ||
    selectedDurations.length > 0 ||
    selectedPracticeAreas.length > 0 ||
    selectedLevels.length > 0;

  return (
    <div className="space-y-6">
      {/* Reset Button */}
      {hasActiveFilters && (
        <Button
          variant="outline"
          size="sm"
          onClick={onReset}
          className="w-full"
        >
          <RotateCcw className="h-4 w-4 mr-2" />
          Reset All Filters
        </Button>
      )}

      {/* Search */}
      <div>
        <Label className="text-base font-semibold mb-3 block">Search Courses</Label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search by course name..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Status Filter */}
      <div>
        <Label className="text-base font-semibold mb-3 block">Status</Label>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="status-available"
              checked={selectedStatuses.includes("Available")}
              onCheckedChange={() => onStatusChange("Available")}
            />
            <Label htmlFor="status-available" className="cursor-pointer font-normal">
              Available
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="status-coming"
              checked={selectedStatuses.includes("Coming Soon")}
              onCheckedChange={() => onStatusChange("Coming Soon")}
            />
            <Label htmlFor="status-coming" className="cursor-pointer font-normal">
              Coming Soon
            </Label>
          </div>
        </div>
      </div>

      {/* Duration Filter */}
      <div>
        <Label className="text-base font-semibold mb-3 block">Duration</Label>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="duration-1"
              checked={selectedDurations.includes("1 Day")}
              onCheckedChange={() => onDurationChange("1 Day")}
            />
            <Label htmlFor="duration-1" className="cursor-pointer font-normal">
              1 Day
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="duration-5"
              checked={selectedDurations.includes("5 Days")}
              onCheckedChange={() => onDurationChange("5 Days")}
            />
            <Label htmlFor="duration-5" className="cursor-pointer font-normal">
              5 Days
            </Label>
          </div>
        </div>
      </div>

      {/* Level Filter */}
      <div>
        <Label className="text-base font-semibold mb-3 block">Level</Label>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="level-foundation"
              checked={selectedLevels.includes("Foundation")}
              onCheckedChange={() => onLevelChange("Foundation")}
            />
            <Label htmlFor="level-foundation" className="cursor-pointer font-normal">
              Foundation
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="level-intermediate"
              checked={selectedLevels.includes("Intermediate")}
              onCheckedChange={() => onLevelChange("Intermediate")}
            />
            <Label htmlFor="level-intermediate" className="cursor-pointer font-normal">
              Intermediate
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="level-advanced"
              checked={selectedLevels.includes("Advanced")}
              onCheckedChange={() => onLevelChange("Advanced")}
            />
            <Label htmlFor="level-advanced" className="cursor-pointer font-normal">
              Advanced
            </Label>
          </div>
        </div>
      </div>

      {/* Practice Area Filter */}
      <div>
        <Label className="text-base font-semibold mb-3 block">Practice Area</Label>
        <div className="space-y-2 max-h-64 overflow-y-auto pr-2">
          {practiceAreas.map((area) => (
            <div key={area} className="flex items-center space-x-2">
              <Checkbox
                id={`area-${area}`}
                checked={selectedPracticeAreas.includes(area)}
                onCheckedChange={() => onPracticeAreaChange(area)}
              />
              <Label htmlFor={`area-${area}`} className="cursor-pointer font-normal text-sm">
                {area}
              </Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
