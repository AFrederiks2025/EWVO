/**
 * GROQ-queries. Plain strings — werken direct met client.fetch().
 */

export const servicesQuery = `*[_type == "service"] | order(order asc, title asc){
  "slug": slug.current, title, tagline, summary, icon, features, intro
}`;

export const serviceSlugsQuery = `*[_type == "service" && defined(slug.current)].slug.current`;

export const serviceQuery = `*[_type == "service" && slug.current == $slug][0]{
  "slug": slug.current, title, tagline, summary, icon, features, intro
}`;

export const teamQuery = `*[_type == "teamMember"] | order(order asc){
  "slug": slug.current, name, role, bio, image
}`;

export const casesQuery = `*[_type == "caseStudy"] | order(order asc){
  "slug": slug.current, client, sector, summary, featured, url, problem, approach, result, quote, "image": image.asset->url
}`;

export const caseSlugsQuery = `*[_type == "caseStudy" && defined(slug.current)].slug.current`;

export const caseQuery = `*[_type == "caseStudy" && slug.current == $slug][0]{
  "slug": slug.current, client, sector, summary, featured, url, problem, approach, result, quote, "image": image.asset->url
}`;

export const postsQuery = `*[_type == "post"] | order(date desc){
  "slug": slug.current, title, excerpt, date, author, category, "imageUrl": image.asset->url
}`;

export const postSlugsQuery = `*[_type == "post" && defined(slug.current)].slug.current`;

export const postQuery = `*[_type == "post" && slug.current == $slug][0]{
  "slug": slug.current, title, excerpt, date, author, category, body
}`;

export const siteSettingsQuery = `*[_type == "siteSettings"][0]{
  tagline, description, phone, email, whatsapp, hours, socials
}`;
