const news = [
  { id: 1, title: "Adarsh Infrastructure Completes 132kV Substation Project", date: "Jan 2025" },
  { id: 2, title: "New Solar Power Installation for Chhindwara Industrial Zone", date: "Dec 2024" },
];

const LatestNews = () => {
  return (
    <section className="py-16 bg-background text-foreground text-center">
      <h3 className="text-4xl font-bold text-primary">Latest News</h3>
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {news.map((item) => (
          <div key={item.id} className="p-6 bg-secondary rounded-lg shadow-lg hover:shadow-xl transition">
            <h4 className="text-xl font-semibold">{item.title}</h4>
            <p className="mt-2 text-gray-300">{item.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestNews;
