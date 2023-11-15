import sql from "@/db/connection";

export interface QueriedDoc {
  documentContentHash: string;
  name: string;
  number: string;
  publishedTimestamp: Date;
}

export interface QueriedDocDetail {
  documentContentHash: string;
  number: string;
  name: string;
  docType: string;
  divisionName: string;
  publishedTimestamp: Date;
  officerName: string;
  positionName: string;
  resourceUri: string;
}

export const queryDocById = async (docContentHash: string): Promise<QueriedDocDetail> => {
  const result = await sql`
  SELECT od."document_content_hash",
    od."number",
    od."name",
    od."doc_type",
    odiv."name" as division_name,
    od."published_timestamp",
    of."name" as officer_name,
    op."name" as position_name,
    doc."resource_uri"
  FROM "onchain_documents" od
  INNER JOIN "onchain_officers" of on of."address" = od."publisher_address"
  INNER JOIN "onchain_positions" op on op."officer_address" = od."publisher_address"
    AND op."division_onchain_id" = od."publisher_division_id"
    AND op."position_index" = od."publisher_position_index"
  LEFT JOIN "documents" doc ON doc."hash" = od."document_content_hash"
  INNER JOIN "onchain_divisions" odiv ON odiv."onchain_id" = od."division_id"
  WHERE od."document_content_hash" = ${docContentHash};
      `;

  const row = result[0];

  const doc: QueriedDocDetail = {
    documentContentHash: row.document_content_hash,
    number: row.number,
    name: row.name,
    docType: row.doc_type,
    divisionName: row.division_name,
    publishedTimestamp: row.published_timestamp,
    officerName: row.officer_name,
    positionName: row.position_name,
    resourceUri: row.resource_uri,
  };

  return doc;
};

export interface QueriedSigner {
  signerName: string;
  positionName: string;
}

export const queryDocSigners = async (docContentHash: string): Promise<QueriedSigner[]> => {
  const result = await sql`
  SELECT 
    of."name" as signer_name,
    op."name" as position_name
  FROM "onchain_document_signatures" ods
  INNER JOIN "onchain_officers" of ON of."address" = ods."signers_address"
  INNER JOIN "onchain_positions" op on op."officer_address" = ods."signers_address"
    AND op."division_onchain_id" = ods."division_onchain_id"
    AND op."position_index" = ods."position_index"
  WHERE ods."document_content_hash" = ${docContentHash};
      `;

  const signers: QueriedSigner[] = result.map((row) => ({
    signerName: row.signer_name,
    positionName: row.position_name,
  }));

  return signers;
};

const docTypeIn = (docType: string[]) => sql`AND "doc_type" IN ${sql(docType)}`;
const yearIn = (years: string[]) => {
  const conditions = [];

  for (const year of years) {
    const startOfYear = `${year}-01-01 00:00:00`;
    const endOfYear = `${year}-12-31 23:59:59`;

    conditions.push(`("published_timestamp" >= '${startOfYear}' AND "published_timestamp" <= '${endOfYear}')`);
  }

  return sql.unsafe(`AND (${conditions.join(" OR ")})`);
};
const divIn = (div: string[]) => sql`AND "division_id" IN ${sql(div)}`;

export const queryDocs = async (filter: { docType?: string[]; year?: string[]; div: string[] }): Promise<QueriedDoc[]> => {
  const result = await sql`
    SELECT "document_content_hash", "name", "number", "published_timestamp"
    FROM "onchain_documents"
    WHERE TRUE ${filter.docType?.length ? docTypeIn(filter.docType) : sql``} ${filter.year?.length ? yearIn(filter.year) : sql``} ${
      filter.div?.length ? divIn(filter.div) : sql``
    }
    ORDER BY "published_timestamp" DESC;
    `;

  const docs: QueriedDoc[] = result.map((row) => ({
    documentContentHash: row.document_content_hash,
    name: row.name,
    number: row.number,
    publishedTimestamp: row.published_timestamp,
  }));

  return docs;
};

export interface DocumentType {
  id: string;
  name: string;
}

export const queryDocTypes = async (): Promise<DocumentType[]> => {
  const result = await sql`
    SELECT "id", "name"
    FROM "document_types";
    `;

  const types: DocumentType[] = result.map((row) => ({
    id: row.id + "",
    name: row.name,
  }));

  return types;
};
