const articles = Array.from({ length: 15 }, (_, i) => {
  const date = new Date(2026, 0, i + 1); // Jan 1–15, 2026

  return {
    id: i + 1,
    title: `Sample Article ${i + 1}`,
    date: date.toDateString(),
    content: `
      This is the full content of Sample Article ${i + 1}.
      
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      
      Section 1:
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
      
      Section 2:
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
      
      Conclusion:
      Excepteur sint occaecat cupidatat non proident.
    `
  };
});

export default articles;