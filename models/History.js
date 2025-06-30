const mongoose = require("mongoose");

const historySchema = new mongoose.Schema(
  {
    personalData: {
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
      sex: { type: String, enum: ["F", "M"], required: true },
      idNumber: { type: String, required: true, match: /^\d{10}$/ },
      birthDate: { type: Date, required: true, max: Date.now },
      phone: { type: String, required: true, match: /^09\d{8}$/ },
      address: { type: String, required: true },
      age: { type: Number, required: true, min: 4 },
      occupation: { type: String },
      emergencyContact: { type: String, match: /^09\d{8}$/ },
    },
    reasonForConsultation: {
      type: String,
      required: true,
      maxlength: 1024,
    },
    medicalHistory: {
      bajoTratamientoMedico: { type: Boolean, required: true },
      propensoHemorragias: { type: Boolean, required: true },
      alergias: { type: Boolean, required: true },
      embarazo: { type: Boolean, required: true },
      hipertension: { type: Boolean, required: true },
      diabetes: { type: Boolean, required: true },
      actualmenteTomaMedicacion: { type: Boolean, required: true },
      detalleMedicacion: {
        type: String,
        required: function () {
          return this.medicalHistory.actualmenteTomaMedicacion;
        },
        maxlength: 1024,
      },
    },
    notes: {
      type: String,
      required: false,
      maxlength: 1024,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("History", historySchema, "historiasClinicas");
