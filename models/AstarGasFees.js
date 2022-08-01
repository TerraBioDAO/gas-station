import mongoose from 'mongoose';

const AstarGasFeesSchema = new mongoose.Schema({
    data: mongoose.Mixed,
});

const AstarGasFees = mongoose.model('AstarGasFees', AstarGasFeesSchema);

export default AstarGasFees;
