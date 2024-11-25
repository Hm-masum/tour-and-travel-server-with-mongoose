import { model, Schema } from 'mongoose';
import { IUser } from './user.interface';

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: [true, 'Please enter your name.'],
    minLength: 3,
    maxLength: 20,
  },
  age: { type: Number, required: [true, 'Please enter your age.'] },
  email: {
    type: String,
    required: [true, 'Please enter your email.'],
    unique: true,
    validate: {
      validator: function (value: string) {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
      },
      message: '{VALUE} is not valid email',
    },
    immutable: true,
  },
  photo: { type: String },
  role: {
    type: String,
    enum: {
      values: ['user', 'admin'],
      message: '{VALUE} is not valid. Please provide a valid role',
    },
    default: 'user',
    required: true,
  },
  userStatus: {
    type: String,
    enum: {
      values: ['active', 'inactive'],
      message: '{VALUE} is not valid. Please provide a valid status',
    },
    required: true,
  },
});

// Hook ->pre
userSchema.pre('find', function (this, next) {
  this.find({ userStatus: { $eq: 'active' } });
  next();
});

// Hook ->post
userSchema.post('find', function (docs, next) {
  docs.forEach((doc: IUser) => {
    doc.name = doc.name.toUpperCase();
  });
  next();
});

const User = model<IUser>('User', userSchema);
export default User;
