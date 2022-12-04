const mongoose = require('mongoose');
const slugify = require('slugify');

const tourSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A tour must have a name'],
      unique: true,
      maxlength: [40, 'A tour can only have max character of 40 characters'],
      minlength: [10, 'A tour must have have min character of 10 characters'],
    },
    slug: String,
    duration: {
      type: String,
      required: [true, 'A tour must have a duration'],
    },
    maxGroupSize: {
      type: Number,
      required: [true, 'A tour must have a group size'],
    },
    difficulty: {
      type: String,
      required: [true, 'A tour must have a difficutly'],
    },
    price: {
      type: Number,
      required: [true, 'A tour must have a price'],
    },
    ratingAverage: {
      type: Number,
      default: 4.5,
    },
    ratingQuanity: {
      type: Number,
      default: 0,
    },
    priceDiscount: {
      type: Number,
    },
    summary: {
      type: String,
      trim: true,
      required: [true, 'The Tour must have a description'],
    },
    description: {
      type: String,
      trim: true,
    },
    imageCover: {
      type: String,
      required: [true, 'A tour must have a cover images'],
    },
    images: [String],
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    startDates: [Date],
    secretTour: {
      type: Boolean,
    },
  }
  // {
  //   toJSON: {
  //     virtuals: true,
  //   },
  //   toObject: {
  //     virtuals: true,
  //   },
  // }
);

// tourSchema.virtual('durationWeeks').get(function () {
//   return this.duration / 7;
// });

// //DOCUMENT MIDDLEWARE: runs before .save() and .create()
// tourSchema.pre('save', function (next) {
//   // console.log(this);
//   this.slug = slugify(this.name, { lower: true });
//   next();
// });

// tourSchema.pre('save', function (next) {
//   // console.log(this);
//   console.log('Will save document...');
//   next();
// });

// tourSchema.post('save', function (doc, next) {
//   // console.log(this);
//   console.log(doc);
//   next();
// });

// //QUERY MIDDLEWARE
// tourSchema.pre(/^find/, function (next) {
//   this.find({ secretTour: { $ne: true } });

//   this.start = Date.new();
//   next();
// });

// tourSchema.post(/^find/, function (docs, next) {
//   console.log(`Query took ${Date.now - this.start} millisecs `);
//   console.log(docs);

//   next();
// });

// //AGGREGATION MIDDLEWARE
// tourSchema.pre('aggregate', function (next) {
//   this.pipeline().unshift({ $match: { secretTour: { $ne: true } } });
//   console.log(this.pipeline());
//   next();
// });

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
