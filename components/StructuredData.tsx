export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://awakenedperspectivepress.com/#organization",
        name: "Awakened Perspective Press",
        url: "https://awakenedperspectivepress.com",
        description:
          "Awakened Perspective Press helps authors navigate the journey from manuscript to professionally published book, providing publishing guidance, self-publishing support, ISBN and distribution assistance, book marketing, and author launch services.",
      },
      {
        "@type": "WebSite",
        "@id": "https://awakenedperspectivepress.com/#website",
        url: "https://awakenedperspectivepress.com",
        name: "Awakened Perspective Press",
        publisher: {
          "@id": "https://awakenedperspectivepress.com/#organization",
        },
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://awakenedperspectivepress.com/#publishing-service",
        name: "Awakened Perspective Press",
        url: "https://awakenedperspectivepress.com",
        description:
          "Publishing support and author services for writers seeking guidance with publishing, self-publishing, book distribution, marketing, and launching their books.",
        provider: {
          "@id": "https://awakenedperspectivepress.com/#organization",
        },
        areaServed: "Worldwide",
        serviceType: [
          "Book Publishing Services",
          "Self-Publishing Support",
          "Author Services",
          "Book Marketing",
          "Book Distribution",
          "Publishing Consultation",
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}