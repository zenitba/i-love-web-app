import { GraphQLClient } from 'graphql-request'

export const hygraph = new GraphQLClient("https://eu-west-2.cdn.hygraph.com/content/clrgivjyc0q6x01w2hv9e81jf/master", {
  headers: {
    Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3MDU1MTYyOTEsImF1ZCI6WyJodHRwczovL2FwaS1ldS13ZXN0LTIuaHlncmFwaC5jb20vdjIvY2xyZ2l2anljMHE2eDAxdzJodjllODFqZi9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC1ldS13ZXN0LTIuaHlncmFwaC5jb20vIiwic3ViIjoiYzVlOTY5Y2MtOTdkZC00NjRlLTkwZjAtODRjODU4Y2U1YmE3IiwianRpIjoiY2xyaTRkNTFjM2U4aDAxbDUxcTQ2ZmkyayJ9.cU5FKYijSdMFVvsVTphm0Fb9O2K8z4-j8uNrMYssZPAXuevp5scVuizJFL5Vx3UjeI9ri_tF7mtCqAbhtMJOAjNYM3J8WkPqpKkI7r7yDkBGfAziCQcq8fi4Kc7UFc5WbSTZn55gjhI8MYCFftXNuquMv4uPl28g_3SrUka9i8ixVe4gMXEYvGM1FYvG_xL61sO9jMZR5GgvYhbnF-YSUeZIwhaNcZLePSS3jLg3o9dK223CtYSw_2O0Yw3jE2rWCTOZb7XpvY4QpIOkeRelXXYHmdsJzZ641uzU3rRTe0QVEv6TNywW9WWlGoNkUF01uWE_9M_LsxrtCw0XT24qiQS06bAGJcuFr-olyVXaVSzoNpfiB8DBg7oYS78DOzWuwy8M8zuGouJzn0hit7Sp3jmNNqUF3xckNvdnhvxH0hlNDZYo1nLGR2Oo7xKnY4-IE2BQTsdoJEwedR_nhbOaDZbwECpWs0WKtIiUp93igW3iQYssctzOa-wtb54_IzZjfBxHC9-pjRxC6Oy6_TmMk7adDsLleSd67GaHca4sNVy99MexfMs_7_YXzi8dtctVDMCKAFi4oDL3wr83PwUHogActnL912q-Cx_oOXAbj4RA8nVwbYyvyBfrunjiWUlM9FfHczHXJbRuGKbhWWd5HCEbGZrs3tQLJWq3E-mxxgA`
  }
})