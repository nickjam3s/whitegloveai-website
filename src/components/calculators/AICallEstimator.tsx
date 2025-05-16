
import React, { useState, useEffect } from 'react';
import { Calculator, Info } from 'lucide-react';
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const AICallEstimator = () => {
  // State for user inputs
  const [totalDailyCalls, setTotalDailyCalls] = useState<number>(100);
  const [percentageAICanHandle, setPercentageAICanHandle] = useState<number>(60);
  const [avgInteractionTime, setAvgInteractionTime] = useState<number>(1.5);
  const [showSummary, setShowSummary] = useState<boolean>(false);
  
  // State for calculated values
  const [dailyDeflectableCalls, setDailyDeflectableCalls] = useState<number>(0);
  const [estimatedDailyMinutes, setEstimatedDailyMinutes] = useState<number>(0);
  const [estimatedMonthlyMinutes, setEstimatedMonthlyMinutes] = useState<number>(0);
  const [recommendedBundle, setRecommendedBundle] = useState<string>("");
  
  // Fixed internal variables
  const operatingDaysPerMonth = 25;
  
  // Bundle thresholds
  const bundles = {
    small: { max: 750, name: "Small (S)" },
    medium: { min: 751, max: 1500, name: "Medium (M)" },
    large: { min: 1501, max: 3000, name: "Large (L)" },
    xl: { min: 3001, max: 5000, name: "XL (Extra Large)" },
    custom: { min: 5001, name: "Custom" }
  };

  // Handle input changes
  const handleTotalCallsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(0, parseInt(e.target.value) || 0);
    setTotalDailyCalls(value);
  };

  const handlePercentageChange = (value: number[]) => {
    setPercentageAICanHandle(value[0]);
  };

  const handleInteractionTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(0, parseFloat(e.target.value) || 0);
    setAvgInteractionTime(parseFloat(value.toFixed(1)));
  };

  // Calculate estimations
  useEffect(() => {
    // Calculate daily deflectable calls
    const dailyDeflectable = totalDailyCalls * (percentageAICanHandle / 100);
    setDailyDeflectableCalls(Math.round(dailyDeflectable));
    
    // Calculate estimated daily AI minutes
    const dailyMinutes = dailyDeflectable * avgInteractionTime;
    setEstimatedDailyMinutes(Math.round(dailyMinutes * 10) / 10);
    
    // Calculate estimated monthly AI minutes
    const monthlyMinutes = dailyMinutes * operatingDaysPerMonth;
    const roundedMonthlyMinutes = Math.round(monthlyMinutes);
    setEstimatedMonthlyMinutes(roundedMonthlyMinutes);
    
    // Determine recommended bundle
    if (roundedMonthlyMinutes <= bundles.small.max) {
      setRecommendedBundle(bundles.small.name);
    } else if (roundedMonthlyMinutes <= bundles.medium.max) {
      setRecommendedBundle(bundles.medium.name);
    } else if (roundedMonthlyMinutes <= bundles.large.max) {
      setRecommendedBundle(bundles.large.name);
    } else if (roundedMonthlyMinutes <= bundles.xl.max) {
      setRecommendedBundle(bundles.xl.name);
    } else {
      setRecommendedBundle(bundles.custom.name);
    }
  }, [totalDailyCalls, percentageAICanHandle, avgInteractionTime]);

  return (
    <div className="w-full max-w-4xl mx-auto bg-card rounded-xl shadow-lg overflow-hidden">
      <div className="p-6 md:p-8">
        <div className="flex items-center gap-3 mb-6">
          <Calculator className="h-6 w-6 text-primary" />
          <h2 className="text-2xl md:text-3xl font-bold text-white">AI Call Guide: Monthly Minute Estimator</h2>
        </div>
        
        <div className="text-gray-300 mb-8">
          Estimate your potential monthly usage of our AI-powered call handling service and find the right bundle for your business.
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white mb-4">Your Call Information</h3>
            
            {/* Average Total Daily Calls */}
            <div className="space-y-2">
              <label htmlFor="totalCalls" className="block text-gray-200 font-medium">
                Average Total Daily Calls
              </label>
              <Input
                id="totalCalls"
                type="number"
                min="0"
                step="1"
                value={totalDailyCalls}
                onChange={handleTotalCallsChange}
                className="w-full bg-background text-white"
              />
            </div>
            
            {/* Percentage of Calls AI Can Handle */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <label htmlFor="percentageAI" className="block text-gray-200 font-medium">
                  Estimated Percentage of Calls AI Can Handle
                </label>
                <Popover>
                  <PopoverTrigger>
                    <Info className="h-4 w-4 text-gray-400 cursor-pointer hover:text-primary transition-colors" />
                  </PopoverTrigger>
                  <PopoverContent className="w-80 bg-white/90 text-gray-800 border border-gray-200">
                    <div className="space-y-2">
                      <h4 className="font-medium">Common deflectable call types:</h4>
                      <ul className="list-disc pl-5 text-sm">
                        <li>Business hours & location inquiries</li>
                        <li>Appointment scheduling & changes</li>
                        <li>Basic service information</li>
                        <li>Order status checks</li>
                        <li>Product availability</li>
                        <li>Simple troubleshooting</li>
                      </ul>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
              <div className="flex items-center gap-4">
                <Slider
                  id="percentageAI"
                  min={0}
                  max={100}
                  step={1}
                  value={[percentageAICanHandle]}
                  onValueChange={handlePercentageChange}
                  className="flex-1"
                />
                <span className="w-12 text-right text-white font-medium">{percentageAICanHandle}%</span>
              </div>
            </div>
            
            {/* Average AI Interaction Time */}
            <div className="space-y-2">
              <label htmlFor="interactionTime" className="block text-gray-200 font-medium">
                Average AI Interaction Time (Minutes)
              </label>
              <Input
                id="interactionTime"
                type="number"
                min="0"
                step="0.1"
                value={avgInteractionTime}
                onChange={handleInteractionTimeChange}
                className="w-full bg-background text-white"
              />
            </div>
          </div>
          
          {/* Results Section */}
          <div className="bg-card/60 rounded-lg p-6 border border-primary/20">
            <h3 className="text-xl font-semibold text-white mb-6">Your Estimate</h3>
            
            <div className="space-y-8">
              <div>
                <div className="text-gray-400 text-sm">Estimated Monthly AI Minutes</div>
                <div className="text-3xl font-bold text-primary mt-1">{estimatedMonthlyMinutes}</div>
              </div>
              
              <div>
                <div className="text-gray-400 text-sm">Recommended Bundle</div>
                <div className="text-2xl font-bold text-white mt-1">{recommendedBundle}</div>
              </div>
              
              {/* Calculation Summary */}
              <div>
                <button 
                  onClick={() => setShowSummary(!showSummary)}
                  className="text-sm text-gray-400 hover:text-primary transition-colors flex items-center gap-1"
                >
                  {showSummary ? 'Hide' : 'Show'} calculation details
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`h-4 w-4 transition-transform ${showSummary ? 'rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {showSummary && (
                  <div className="mt-3 text-sm text-gray-300 space-y-1">
                    <p>• {totalDailyCalls} daily calls × {percentageAICanHandle}% AI-handled = {dailyDeflectableCalls} deflectable calls</p>
                    <p>• {dailyDeflectableCalls} deflectable calls × {avgInteractionTime} min = {estimatedDailyMinutes} minutes/day</p>
                    <p>• {estimatedDailyMinutes} min/day × {operatingDaysPerMonth} days = {estimatedMonthlyMinutes} min/month</p>
                  </div>
                )}
              </div>
              
              {/* Call to Action */}
              <Button className="w-full" size="lg">
                Contact Us to Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AICallEstimator;
