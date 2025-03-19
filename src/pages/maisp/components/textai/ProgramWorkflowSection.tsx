
import { CheckCircle2, Lightbulb } from "lucide-react";

const steps = [
  "Contact us via the below form.",
  "We will set up an intro call for qualification.",
  "Once qualified, we will create your chatbot, test internally and offer you time to test.",
  "Once testing is complete, we will work with you to install the chatbot on your website.",
  "As a part of our service, we will offer you monthly insights into all chats that take place with your chatbot."
];

const ProgramWorkflowSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Lightbulb className="h-14 w-14 text-secondary mb-6" />
            <h2 className="text-3xl font-bold mb-8">How Our Program Works</h2>
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-6 mt-1">
                    <span className="flex items-center justify-center h-6 w-6 rounded-full bg-secondary/20 text-secondary font-semibold text-sm">
                      {index + 1}
                    </span>
                  </div>
                  <p className="text-gray-400">{step}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <img 
              src="/lovable-uploads/101ef418-bad4-4865-84ba-ee63bf30711e.png" 
              alt="Program process illustration" 
              className="w-full max-w-md"
            />
          </div>
        </div>

        <div className="absolute right-6 top-6">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-70">
            <path d="M20 0C8.95431 0 0 8.95431 0 20C0 31.0457 8.95431 40 20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0ZM25.8961 12.1921C28.0285 14.3244 28.0285 17.8176 25.8961 19.95L20.0017 25.8444L14.1035 19.9462C11.9712 17.8138 11.9712 14.3206 14.1035 12.1883C16.2359 10.0559 19.7291 10.0559 21.8615 12.1883L22.878 13.2047L23.8957 12.1871C26.0281 10.0547 29.5213 10.0547 31.6537 12.1871C33.786 14.3195 33.786 17.8127 31.6537 19.9451L25.7567 25.8421L24.7402 24.8255L30.6372 18.9286C32.0078 17.558 32.0078 15.1546 30.6372 13.784C29.2665 12.4133 26.8631 12.4133 25.4925 13.784L23.9122 15.3643L22.878 14.3301L21.8615 13.3136C20.4909 11.943 18.0874 11.943 16.7168 13.3136C15.3462 14.6843 15.3462 17.0877 16.7168 18.4583L22.0015 23.743L23.018 22.7266L17.7333 17.4419C17.1045 16.8131 17.1045 15.7842 17.7333 15.1553C18.3621 14.5265 19.391 14.5265 20.0199 15.1553L22.8817 18.0171L23.8982 17.0006L21.0364 14.1388C19.646 12.7483 17.2932 12.7483 15.9028 14.1388C14.5123 15.5292 14.5123 17.882 15.9028 19.2724L20.0016 23.3712L24.0996 19.2732C25.4901 17.8828 25.4901 15.53 24.0996 14.1395C22.7092 12.7491 20.3564 12.7491 18.9659 14.1395L17.9494 15.156L16.9329 14.1395C15.5425 12.7491 13.1897 12.7491 11.7992 14.1395C10.4088 15.53 10.4088 17.8828 11.7992 19.2732L17.6974 25.1714L20.0016 27.4756L22.3068 25.1704L28.2013 19.276C31.0955 16.3818 31.0955 11.7602 28.2013 8.86604C25.3071 5.97183 20.6856 5.97183 17.7913 8.86604C14.8971 11.7602 14.8971 16.3818 17.7913 19.276L20.0016 21.4863L22.2081 19.2798C24.5993 16.8886 24.5993 12.9497 22.2081 10.5584C19.8168 8.16719 15.8779 8.16719 13.4867 10.5584C11.0954 12.9497 11.0954 16.8886 13.4867 19.2798L15.7012 21.4943L16.7177 20.4778L14.5032 18.2633C12.8737 16.6339 12.8737 13.9236 14.5032 12.2942C16.1326 10.6647 19.1427 10.6647 20.7721 12.2942C22.4016 13.9236 22.4016 16.6339 20.7721 18.2633L20.0016 19.0339L19.2273 18.2596C18.6014 17.6337 18.6014 16.6003 19.2273 15.9744C19.8532 15.3485 20.8865 15.3485 21.5124 15.9744L22.2868 16.7488L23.3033 15.7323L22.5289 14.9579C20.7906 13.2196 17.9491 13.2196 16.2108 14.9579C14.4726 16.6962 14.4726 19.5377 16.2108 21.276L20.0014 25.0666L23.7921 21.2759C25.5304 19.5376 25.5304 16.6961 23.7921 14.9578C22.053 13.2188 19.2083 13.2208 17.4698 14.9606L16.9467 15.4844C16.1623 14.7013 16.1623 13.448 16.9467 12.6649C17.7312 11.8819 18.9814 11.8819 19.7659 12.6649L19.9999 12.8988L20.2345 12.6643C21.019 11.8812 22.2692 11.8812 23.0537 12.6643C23.8381 13.4474 23.8381 14.7006 23.0537 15.4837L22.5298 16.0076C24.2674 17.7465 24.2694 20.5911 22.5303 22.3302C20.792 24.0685 17.9505 24.0685 16.2122 22.3302L12.4216 18.5396C10.6833 16.8013 10.6833 13.9598 12.4216 12.2215C14.1599 10.4832 17.0014 10.4832 18.7397 12.2215L19.2635 11.6977C17.5245 9.9602 14.6799 9.95819 12.9408 11.6973C11.2018 13.4363 11.2 16.2768 12.9376 18.015L13.4614 17.4912C11.7241 15.7523 11.7221 12.9077 13.4612 11.1686C15.1994 9.43032 18.041 9.43032 19.7793 11.1686L20.3031 10.6448C18.5641 8.90732 15.7195 8.90531 13.9804 10.6444C12.2414 12.3834 12.2396 15.2239 13.9772 16.9621L14.5011 16.4383C14.5011 16.4383 12.5 14.5 15 12C17.5 9.5 19.9999 12 19.9999 12C19.9999 12 22.5 9.5 25 12C27.5 14.5 25.5018 16.4365 25.5018 16.4365L25.8961 16.0422C26.6805 15.2592 27.9307 15.2592 28.7152 16.0422C29.4996 16.8253 29.4996 18.0785 28.7152 18.8616L26.4214 21.1554L27.4379 22.1719L29.7317 19.8781C31.3612 18.2486 31.3612 15.5384 29.7317 13.9089C28.1023 12.2795 25.3991 12.2795 23.7697 13.9089L25.8961 12.1921Z" fill="#7021EE"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default ProgramWorkflowSection;
