import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
//

export function getRandomDateWithin24Hours() {
  const now = new Date();
  const past24Hours = new Date(now.getTime() - 24 * 60 * 60 * 1000); // 24 hours ago in milliseconds

  // Get a random timestamp between past24Hours and now
  const randomTimestamp =
    past24Hours.getTime() +
    Math.random() * (now.getTime() - past24Hours.getTime());

  // Create a new Date object with the random timestamp
  return new Date(randomTimestamp);
}

export function generateAvatarInitials(name: string): string {
  const nameArray: string[] = name.trim().split(" ");

  let initials: string = "";

  // Add the first character of the first word to initials
  if (nameArray.length > 0) {
    initials += nameArray[0].charAt(0).toUpperCase();
  }

  // Add the first character of the last word to initials
  if (nameArray.length > 1) {
    initials += nameArray[nameArray.length - 1].charAt(0).toUpperCase();
  }

  return initials;
}

export function calculateRevenue({
  currentAnnualRevenue,
  goalAnnualRevenue,
  brandingStatus,
  percentageIncrease,
  costOfBranding,
}: {
  currentAnnualRevenue: number;
  goalAnnualRevenue: number;
  percentageIncrease: number;
  brandingStatus: string;
  costOfBranding: number;
}) {
  const percentageIncreaseDecimal = percentageIncrease / 100;
  const newAnnualRevenue =
    currentAnnualRevenue * (1 + percentageIncreaseDecimal);
  const newPercentageIncrease =
    ((newAnnualRevenue - currentAnnualRevenue) / currentAnnualRevenue) * 100;
  const addedRevenue = newAnnualRevenue - currentAnnualRevenue;
  const roi = Math.floor(
    ((addedRevenue - costOfBranding) / costOfBranding) * 100
  );
  return {
    roi,
    newAnnualRevenue,
    addedRevenue,
    percentageIncrease,
    goalAnnualRevenue,
    brandingStatus,
  };
}
