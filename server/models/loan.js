import { Schema } from "mongoose";
import mongoose from "mongoose";

const loanSchema = new Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
    loanDate: { type: Date, default: Date.now },
    returnDate: { type: Date, default: null },
    status: { type: String, enum: ['borrowed', 'returned'], default: 'borrowed' }
});

const Loan = mongoose.model('Loan',loanSchema);
export default Loan;