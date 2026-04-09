import { sanityClient, freshClient, urlFor } from '../../sanity/lib/client';
export { sanityClient, freshClient, urlFor };

// ── Singletons ──

export async function fetchSettings() {
  return freshClient.fetch(`*[_id == "siteSettings"][0]{
    organisatieNaam, kboNummer, btwNummer, adres, iban, bic,
    email, telefoon, whatsapp,
    logo, logoFooter, favicon, ogImage,
    statutenPdf, fiscaleInfo,
    facebook, instagram, linkedin, twitter
  }`);
}

export async function fetchHomePage() {
  return freshClient.fetch(`*[_id == "homePage"][0]`);
}

export async function fetchWaqfConfig() {
  return freshClient.fetch(`*[_id == "waqfConfig"][0]`);
}

export async function fetchFatwa() {
  return freshClient.fetch(`*[_id == "fatwa"][0]`);
}

// ── Collecties ──

export async function fetchTeamMembers(rol?: string) {
  const filter = rol ? `&& rol == "${rol}"` : '';
  return sanityClient.fetch(`*[_type == "teamMember" && actief == true ${filter}] | order(volgorde asc){
    naam, rol, foto, titel, specialisatie, bio, quote, email, linkedin, volgorde
  }`);
}

export async function fetchDonatieProjecten(type?: string) {
  const filter = type ? `&& type == "${type}"` : '';
  return sanityClient.fetch(`*[_type == "donatieProject" && actief == true ${filter}] | order(volgorde asc){
    titel, slug, beschrijving, type, doelBedrag, huidigBedrag, afbeelding, volgorde
  }`);
}

export async function fetchHisabRapporten() {
  return sanityClient.fetch(`*[_type == "hisabRapport" && gepubliceerd == true] | order(maand desc){
    maand, inkomstenWaqf, inkomstenProgram, inkomstenZakat, inkomstenOverig,
    uitgavenMentorship, uitgavenEbooks, uitgavenWebsite, uitgavenCommunity, uitgavenOperaties, uitgavenOverig,
    kapitaalEindestand, programFundEindestand, zakatFundEindestand,
    impactMentors, impactEbooks, impactMentees,
    notities, pdfDownload
  }`);
}

export async function fetchFaqItems(categorie?: string) {
  const filter = categorie ? `&& categorie == "${categorie}"` : '';
  return sanityClient.fetch(`*[_type == "faqItem" && gepubliceerd == true ${filter}] | order(volgorde asc){
    vraag, antwoord, categorie, volgorde
  }`);
}

export async function fetchImpactStories() {
  return sanityClient.fetch(`*[_type == "impactStory" && gepubliceerd == true]{
    titel, verhaal, persoon, rol, foto
  }`);
}

export async function fetchNieuwsPosts() {
  return sanityClient.fetch(`*[_type == "nieuwsPost" && gepubliceerd == true] | order(publicatieDatum desc){
    titel, slug, samenvatting, afbeelding, publicatieDatum
  }`);
}
