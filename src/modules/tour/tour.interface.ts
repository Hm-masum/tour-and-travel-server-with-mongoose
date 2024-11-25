import { HydratedDocument } from 'mongoose';
import { ITour, ITourMethods } from './tour.interface';
import { Model } from 'mongoose';

export interface ITour {
  name: string;
  durationHours: number;
  averageRating: number;
  price: number;
  coverImage: string;
  images: string[];
  startDates: Date[];
  startLocation: string;
  locations: string[];
  slug: string;
}

export interface ITourMethods {
  getNextNearestStartDateAndEndDate(): {
    nearestStartDate: Date | null;
    estimateEndDate: Date | null;
  };
}
// type TTourModel = Model<ITour, Record<string, unknown>, ITourMethods>;

interface TTourModel
  extends Model<ITour, Record<string, unknown>, ITourMethods> {
  startDates: Date[];
  durationHours: number;
  getNextNearestStartDateAndEndDate(): Promise<
    HydratedDocument<ITour, ITourMethods>
  >;
}

export default TTourModel;
