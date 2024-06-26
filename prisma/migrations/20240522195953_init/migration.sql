-- CreateTable
CREATE TABLE "Sag" (
    "id" INTEGER NOT NULL,
    "typeid" INTEGER NOT NULL,
    "kategoriid" INTEGER NOT NULL,
    "statusid" INTEGER NOT NULL,
    "titel" TEXT NOT NULL,
    "titelkort" TEXT NOT NULL,
    "offentlighedskode" TEXT NOT NULL,
    "nummer" TEXT NOT NULL,
    "nummerprefix" TEXT NOT NULL,
    "nummernumerisk" TEXT NOT NULL,
    "nummerpostfix" TEXT NOT NULL,
    "resume" TEXT NOT NULL,
    "afstemningskonklusion" TEXT NOT NULL,
    "periodeId" INTEGER NOT NULL,
    "afgorelsesresultatkode" TEXT NOT NULL,
    "baggrundsmateriale" TEXT NOT NULL,
    "opdateringsdato" TEXT NOT NULL,
    "statsbudgetsag" BOOLEAN NOT NULL,
    "begrundelse" TEXT NOT NULL,
    "paragrafnummer" TEXT NOT NULL,
    "paragraf" TEXT NOT NULL,
    "afgorelsesdato" TEXT NOT NULL,
    "afgorelse" TEXT NOT NULL,
    "radsmodedato" TEXT NOT NULL,
    "lovnummer" TEXT NOT NULL,
    "lovnummerdato" TEXT NOT NULL,
    "retsinformationsurl" TEXT NOT NULL,
    "fremsatundersagid" TEXT NOT NULL,
    "deltundersagid" TEXT NOT NULL,

    CONSTRAINT "Sag_pkey" PRIMARY KEY ("id")
);
