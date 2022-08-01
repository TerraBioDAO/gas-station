import mongoose from 'mongoose';

const ShibuyaGasFeesSchema = new mongoose.Schema({
    data: mongoose.Mixed,
});

const ShibuyaGasFees = mongoose.model('ShibuyaGasFees', ShibuyaGasFeesSchema);

export default ShibuyaGasFees;
