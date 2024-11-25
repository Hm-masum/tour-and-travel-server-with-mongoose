import { model, Schema } from 'mongoose';
import TTourModel, { ITour, ITourMethods } from './tour.interface';

const tourSchema = new Schema<ITour, TTourModel, ITourMethods>({
  name: { type: String, required: true },
  durationHours: { type: Number, required: true },
  averageRating: { type: Number, default: 5 },
  price: { type: Number, required: true },
  coverImage: { type: String, required: true },
  images: [String],
  startDates: [Date],
  startLocation: { type: String },
  locations: [String],
  slug: String,
});

/*
tourSchema.methods.getNextNearestStartDateAndEndDate = function () {
  const today = new Date();

  const futureDates = this.startDates.filter((startDate: Date) => {
    return startDate > today;
  });

  futureDates.sort((a: Date, b: Date) => a.getTime() - b.getDate());
  const nearestStartDate = futureDates[0];
  const estimateEndDate = new Date(
    nearestStartDate.getTime() + this.durationHours * 60 * 60 * 1000,
  );

  return {
    nearestStartDate,
    estimateEndDate,
  };
};
*/

tourSchema.static(
  'getNextNearestStartDateAndEndDate',
  function getNextNearestStartDateAndEndDate() {
    const today = new Date();

    const futureDates = this.startDates.filter((startDate: Date) => {
      return startDate > today;
    });

    futureDates.sort((a: Date, b: Date) => a.getTime() - b.getDate());
    const nearestStartDate = futureDates[0];
    const estimateEndDate = new Date(
      nearestStartDate.getTime() + this.durationHours * 60 * 60 * 1000,
    );

    return {
      nearestStartDate,
      estimateEndDate,
    };
  },
);

// const Tour = model('Tour', tourSchema);
const Tour = model<ITour, TTourModel>('Tour', tourSchema);
export default Tour;