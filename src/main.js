import express from 'express';
import cors from 'cors';

import { harvest, estimate } from './harvester.js';
import process from "process";
import mongoose from "mongoose";
import ShibuyaGasFees from "../models/ShibuyaGasFees.js";
import AstarGasFees from "../models/AstarGasFees.js";
import dotenv from 'dotenv';

const BLOCK_INTERVAL = 12000;
dotenv.config();
const app = express()

app.use(cors())

const port = process.env.PORT || 3003;

app.listen(port, () => {
    harvest('shibuya');
    harvest('shiden');
    harvest('astar');
    setInterval(() => {
        harvest('shibuya');
        harvest('shiden');
        harvest('astar');
    }, BLOCK_INTERVAL);


    mongoose.connect(process.env.MONGO_URI)
        .then(async () => {
            setInterval(async () => {
                await ShibuyaGasFees.deleteMany({});
                await ShibuyaGasFees.create({data: estimate['shibuya']});

                await AstarGasFees.deleteMany({});
                await AstarGasFees.create({data: estimate['astar']});
            }, BLOCK_INTERVAL);
        })
        .catch((err) => console.log(err))
    console.log(`App listening on port ${port}`)
});
