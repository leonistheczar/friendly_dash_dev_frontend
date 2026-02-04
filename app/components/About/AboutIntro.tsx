const AboutIntro = () => {
    const styles = {
    size: "h-48 w-48",
  };
    return ( 
        <div className="flex flex-col md:flex-row gap-10 justify-between">
        <img
          src="/images/profile.jpg"
          alt="Profile-Pic"
          className={`${styles.size} object-cover rounded-full border-4 border-blue-600 shadow-md`}
        />
        <div className="flex flex-col text-3xl justify-center gap-y-4">
          <span className="font-bold text-white text-2xl sm:text-3xl">Hey, I’m Muhammad Ali 👋</span>
          <h2 className="mb-2 text-gray-300 text-base">
            a Computer Science student focused on web development, with a keen
            interest in building scalable applications and strengthening my
            engineering fundamentals for a long-term tech career.
          </h2>
        </div>
      </div>
     );
}
 
export default AboutIntro;