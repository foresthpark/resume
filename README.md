# Forest Park Resume

[View the live resume](https://resume.forestp.dev).

I got tired of updating my resume in Google Docs. Every time I added a bullet, I had to renegotiate the page breaks. So I built this instead.

Edit `src/profile.json` to update the public profile. The resume imports it locally,
and the build publishes the same file at `/profile.json` for the terminal portfolio.
Vercel sends an `X-Robots-Tag: noindex` header on that file. Its contents are public.
