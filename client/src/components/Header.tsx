"use client";

import { Menu as HeadlessMenu } from "@headlessui/react";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { useEffect } from "react";

import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);


  const isHome = pathname === "/" ;

  useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 10); // adjust threshold if needed
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  const aboutUsItems = [
    { title: "About Us", href: "/about/about-us" },
    { title: "Our Values", href: "/about/our-values" },
    { title: "What Sets Us Apart", href: "/about/what-sets-us-apart" },
    { title: "How We Help Our Clients", href: "/about/how-we-help-our-clients" },
    { title: "Health and Safety", href: "/about/health-safety" },
    { title: "Organizational Chart", href: "/about/organizational-chart"},
    { title: "Message from Chairman", href: "/about/message-from-chairman" },
    { title: "Awards and Recognition", href: "/about/award-recognition" },
    { title: "Case Studies", href: "/about/case-studies" },
    { title: "Research and Technology", href: "/about/research-technology" },
    { title: "SWOT Analysis", href: "/about/swot-analysis" },
     {title: "Corporate Social Responsibility(CSR)", href: "/about/corporate-social-responsibility" },
  ];
  const servicesItems = [
    { title: "Premium Nightclub Construction", href: "/services/top-premium-nightclub-construction" },
    { title: "Luxurious Residential Developments", href: "/services/top-luxurious-residential-developments" },
    { title: "Commercial Construction", href: "/services/top-commercial-construction" },
    { title: " Architectural & Interior Design", href: "/services/top-architectural-interior-design" },
    { title: "Premium Furniture Supply", href: "/services/top-premium-furniture-supply" },
    { title: "Nightclub Equipment Supply", href: "/services/top-nightclub-equipment-supply" },
    { title: "Project Management & Turnkey Solutions", href: "/services/top-project-management-turnkey-solutions" },
    { title: "We Build, Lease, or Partner", href: "/services/we-build-lease-partner" },
  ]
  const projectItems = [
    { title: "On Going Projects", href: "/projectss/ongoing-projects" },
    { title: "Completed Projects", href: "/projectss/rg-creations-completed-projects" },
    
  ];
  const newsItems = [
    { title: "Media Coverage", href: "/blogs/media-coverage" },
    { title: "Blogs", href: "/blogs" },
    { title: "Announcements", href: "/blogs/announcements" },
    
  ];
   const galleryItems = [
    { title: "Photo Gallery", href: "/gallery/photo-gallery" },
    { title: "Video Gallery", href: "/gallery/video-gallery" },
    { title: "3D Gallery", href: "/gallery/3d-gallery" },
    
  ];

  const careerItems = [
    { title: "Apply For Internship", href: "https://docs.google.com/forms/d/143e8-xUnFKfDCheS24clN4fjbdHXjRs_3AEy9Ngrmrw/viewform?edit_requested=true#responses" },
    { title: "Apply For Job", href: "https://docs.google.com/forms/d/1dDuNos-qDH4AqTXWn8cI-6zOB3ZopFlWD6FHd6nzyX0/viewform?edit_requested=true" },
   
    
  ];

  return (
  <header
  className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
    scrolled ? "bg-white text-gray-800 shadow-md" : isHome ? "bg-white text-gray-800" : "bg-transparent text-white"
  }`}
>
      <div className="container mx-auto  px-4 flex justify-between items-center ">
        {/* Logo */}
        <a href="/" className="font-bold text-xl">
         <div className="bg-gray-100/50  rounded">
          <img src="/Rg Logo .svg" alt="Top Architecture Firm in Nepal | RG Creations" className="lg:h-28 lg:w-28 h-20 w-auto bg-transparent backdrop-blur-sm"
          title="Best architecture company Nepal"  />
          </div>
        </a>

        {/* Desktop Menu */}
        <nav
          className={`hidden lg:flex space-x-3 xl:space-x-5 items-center ${
            isHome ? "text-gray-800" : ""
          }`}
        >
          <a href="/" className="hover:text-green-500 font-medium text-base max-[1366px]:text-sm">
            HOME
          </a>

          {/* About Us Dropdown */}
          <div className="relative group">
            <HeadlessMenu>
              <HeadlessMenu.Button className="flex items-center gap-1 hover:text-green-500 font-medium text-base max-[1366px]:text-sm">
                ABOUT US
                <ChevronDown size={16} />
              </HeadlessMenu.Button>
              <div className="absolute hidden group-hover:block  bg-white text-gray-800 shadow-lg rounded-md py-2 w-64 z-50">
                {aboutUsItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                     
                    className="block px-4 py-2 text-base hover:bg-gray-100"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </HeadlessMenu>
          </div>

          
            {/* About Us Dropdown */}
          <nav className="relative z-[9999]">
          <div className="relative group">
            <HeadlessMenu>
              <HeadlessMenu.Button className="flex items-center gap-1 hover:text-green-500 font-medium text-base max-[1366px]:text-sm">
                SERVICES
                <ChevronDown size={16} />
              </HeadlessMenu.Button>
              <div className="fixed hidden group-hover:block  bg-white text-gray-800 shadow-lg rounded-md py-2 w-64 z-[9999]">
                {servicesItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="block px-4 py-2 text-base hover:bg-gray-100"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </HeadlessMenu>
          </div>
          </nav>


           <nav className="relative z-[9999]">
          <div className="relative group">
            <HeadlessMenu>
              <HeadlessMenu.Button className="flex items-center gap-1 hover:text-green-500 font-medium text-base max-[1366px]:text-sm">
                PROJECTS
                <ChevronDown size={16} />
              </HeadlessMenu.Button>
              <div className="absolute hidden group-hover:block  bg-white text-gray-800 shadow-lg rounded-md py-2 w-64 z-[9999] ">
                {projectItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="block px-4 py-2 text-base hover:bg-gray-100"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </HeadlessMenu>
          </div>
          </nav>
         
        
         

          {/* <a href="/work-process" className="hover:text-green-500 font-medium">
            WORK PROCESS
          </a> */}


          <div className="relative group">
            <HeadlessMenu>
              <HeadlessMenu.Button className="flex items-center gap-1 hover:text-green-500 font-medium text-base max-[1366px]:text-sm">
                NEWS & UPDATES
                <ChevronDown size={16} />
              </HeadlessMenu.Button>
              <div className="absolute hidden group-hover:block  bg-white text-gray-800 shadow-lg rounded-md py-2 w-64 z-50">
                {newsItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="block px-4 py-2 text-base hover:bg-gray-100"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </HeadlessMenu>
          </div>



          {/* Gallery Dropdown */}
          <div className="relative group">
          <HeadlessMenu>
              <HeadlessMenu.Button className="flex items-center gap-1 hover:text-green-500 font-medium text-base max-[1366px]:text-sm">
                GALLERY
                <ChevronDown size={16} />
              </HeadlessMenu.Button>
              <div className="absolute hidden group-hover:block  bg-white text-gray-800 shadow-lg rounded-md py-2 w-64 z-50">
                {galleryItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="block px-4 py-2 text-base hover:bg-gray-100"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </HeadlessMenu>
            </div>

            

            <div className="relative group">
            <HeadlessMenu>
              <HeadlessMenu.Button className="flex items-center gap-1 hover:text-green-500 font-medium text-base max-[1366px]:text-sm">
                CAREER
                <ChevronDown size={16} />
              </HeadlessMenu.Button>
              <div className="absolute hidden group-hover:block  bg-white text-gray-800 shadow-lg rounded-md py-2 w-64 z-50">
                {careerItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    target="_blank"
                     rel="noopener noreferrer"
                    className="block px-4 py-2 text-base hover:bg-gray-100"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </HeadlessMenu>
          </div>


          <a href="/contact" className="hover:text-green-500 font-medium text-base max-[1366px]:text-sm">
            CONTACT 
          </a>

          



          
          <a href="/book-appointment" className="hover:bg-[#333d49] hidden xl:inline-block  text-white bg-[#133950] p-2  font-medium">
            BOOK A CONSULTATION
          </a>

          
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="lg:hidden px-4 pb-4 space-y-4 bg-white shadow-md text-gray-800">
          <a href="/" className="block hover:text-green-500">
            Home
          </a>
          <div>
            <p className="font-medium">About Us</p>
            <div className="ml-4 space-y-1">
              {aboutUsItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="block text-sm hover:text-green-500"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>

          {/* service */}
         <div>
            <p className="font-medium">Services</p>
            <div className="ml-4 space-y-1">
              {servicesItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="block text-sm hover:text-green-500"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>



          <div>
            <p className="font-medium">Gallery</p>
            <div className="ml-4 space-y-1">
              {galleryItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="block text-sm hover:text-green-500"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="font-medium">Projects</p>
            <div className="ml-4 space-y-1">
              {projectItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="block text-sm hover:text-green-500"
                >
                  {item.title}
                </a>
              ))}
            </div>

            <div>
            <p className="font-medium mt-1">News & Updates</p>
            <div className="ml-4 space-y-1">
              {newsItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="block text-sm hover:text-green-500"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>
          </div>
          <a href="/contact" className="block hover:text-green-500">
            Contact
          </a>
        </div>
      )}
    </header>
  );
}
