import { application } from "express";
import mongoose from "mongoose";
import validator from "validator";

const adminSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: [true, "Please provide your first name..!"],
        maxLength: [20, "First name cannot exceed 20 characters"]
    },
    lname: {
        type: String,
        required: [true, "Please provide your last name..!"],
        maxLength: [10, "First name cannot exceed 10 characters"]
    },
    dateofbirth: {
        type: Date,
        required: [true, "Please provide date of birth"]
    },
    gender: {
        type: String,
        required: [true, "Please provide gender"]
    },
    email: {
        type: email,
        required: [true, "Please provide email"]
    },
    password: {
        type: Password,
        required: [true, "Please provide password"]
    }
});

export const patient = mongoose.model("patient", adminSchema);