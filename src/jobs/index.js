import {CronJob} from 'cron';
import {UpdateAdverts} from './UpdateAdverts';

let job = UpdateAdverts;

export default {
  start: () => {
    let advertJob = new CronJob(job);
    advertJob.start();
    if (job.start) {
      job.onTick();
    }
  }
};
