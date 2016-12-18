import LeBonCoin from 'lbc_immo';
import Advert from '../data/models/Advert'
import Promise from 'bluebird';
export const UpdateAdverts = {
  //cronTime: '1 * * * * *',
  cronTime: '0 */10 * * * *',

  onTick: function() {
    new LeBonCoin({show: false})
      .get_results()
      .then(function(adverts){
        Promise.mapSeries(adverts, (advert) => {
          return Advert
            .findOrCreate({where:{url: advert.url}, defaults: advert})
        }).then(() => console.log('finished'))
          .catch((errors) => {
            console.error(errors);
          });
      })
      .catch(function(e){ console.error('aye:' + e + '\n' + e.stack) });
    console.log("I run the job");
  },
  start: false
};
