import db from '@/db/db'
import FetchData from '@/lib/fetcher'
import type { NextApiRequest, NextApiResponse } from 'next'
 
type ResponseData = {
  message: string
}
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  try {
    const data = await FetchData("https://oda.ft.dk/api/Sag")

    if (!data || !data.value) {
      res.status(304).end();
      return;
    }

    await Promise.all(
      data.value.map(async (item: any) => {
        return db.sag.upsert({
          where: {
            id:  item.id
          },
          create: {
            id: item.id,
            typeid: item.typeid,
            kategoriid: item.kategoriid,
            statusid: item.statusid,
            titel: item.titel,
            titelkort: item.titelkort,
            offentlighedskode: item.offentlighedskode,
            nummer: item.nummer,
            nummerprefix: item.nummerprefix,
            nummernumerisk: item.nummernumerisk,
            nummerpostfix: item.nummerpostfix,
            resume: item.resume,
            afstemningskonklusion: item.afstemningskonklusion,
            periodeId: item.periodeid,
            afgorelsesresultatkode: item.afgørelsesresultatkode,
            baggrundsmateriale: item.baggrundsmateriale,
            opdateringsdato: item.opdateringsdato,
            statsbudgetsag: item.statsbudgetsag,
            begrundelse: item.begrundelse,
            paragrafnummer: item.paragrafnummer,
            paragraf: item.paragraf,
            afgorelsesdato: item.afgørelsesdato,
            afgorelse: item.afgørelse,
            radsmodedato: item.rådsmødedato,
            lovnummer: item.lovnummer,
            lovnummerdato: item.lovnummerdato,
            retsinformationsurl: item.retsinformationsurl,
            fremsatundersagid: item.fremsatundersagid,
            deltundersagid: item.deltundersagid
          },
          update: {
            typeid: item.typeid,
            kategoriid: item.kategoriid,
            statusid: item.statusid,
            titel: item.titel,
            titelkort: item.titelkort,
            offentlighedskode: item.offentlighedskode,
            nummer: item.nummer,
            nummerprefix: item.nummerprefix,
            nummernumerisk: item.nummernumerisk,
            nummerpostfix: item.nummerpostfix,
            resume: item.resume,
            afstemningskonklusion: item.afstemningskonklusion,
            periodeId: item.periodeid,
            afgorelsesresultatkode: item.afgørelsesresultatkode,
            baggrundsmateriale: item.baggrundsmateriale,
            opdateringsdato: item.opdateringsdato,
            statsbudgetsag: item.statsbudgetsag,
            begrundelse: item.begrundelse,
            paragrafnummer: item.paragrafnummer,
            paragraf: item.paragraf,
            afgorelsesdato: item.afgørelsesdato,
            afgorelse: item.afgørelse,
            radsmodedato: item.rådsmødedato,
            lovnummer: item.lovnummer,
            lovnummerdato: item.lovnummerdato,
            retsinformationsurl: item.retsinformationsurl,
            fremsatundersagid: item.fremsatundersagid,
            deltundersagid: item.deltundersagid
          }
        });
      })
    );

    res.status(200).json({ message: 'Database updated' })
  } catch(error) {
    res.status(500).json({ message: 'Internal Server Error' })
  }
}