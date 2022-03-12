export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Lenovo Flex 5 Laptop, 14.0" FHD Touch Display, AMD Ryzen 5 5500U, 16GB RAM, 256GB Storage, AMD Radeon Graphics, Windows 11 Home',
    price: 719.99,
    description: `Powered by an AMD Ryzen 5 5500U mobile processor with Radeon graphics, this portable notebook computer has 16GB DDR4 RAM and 256GB NVMe SSD Storage
    Reduce the clutter - The Flex 5 14 touchscreen laptop has a narrow bezel on 4 sides for more viewing area and less clutter on the IPS FHD (1920 x 1080) display
    Designed to keep your ideas flowing, anywhere, anytime with the ability to multi-mode, this Windows laptop has a 360⁰ hinge so you can use it in laptop mode for everyday computing, tent mode for sharing, stand mode for binge-watching your favorite streaming shows, or tablet mode for easy interaction
    A physical shutter on the webcam improves your privacy, allowing you to keep out unwanted attention`,
    img1: 'https://m.media-amazon.com/images/I/71zZiQGzc5L._AC_SL1500_.jpg',
    img2: 'https://m.media-amazon.com/images/I/818B97p+vcL._AC_SL1500_.jpg',
    img3: 'https://m.media-amazon.com/images/I/71QjZ06DaFL._AC_SL1500_.jpg',
    rating:4.4,
    link:"https://www.amazon.com/Lenovo-Processor-Graphics-82HU00JWUS-Graphite/dp/B09BG96KFJ/ref=sr_1_1?qid=1647096079&refinements=p_89%3ALenovo%2Cp_n_feature_thirty-three_browse-bin%3A23720418011&rnid=23720416011&s=computers-intl-ship&sr=1-1",
  },
  {
    id: 2,
    name: `2022 Lenovo IdeaPad 3i 15 Touchscreen Laptop, Intel i3-1115G4 16GB RAM 512GB SSD, 15.6 FHD Display, Fingerprint Reader, Webcam for Remote School&Work, Premium Lightweight, Windows 11 S, LIONEYE Bundle`,
    price: 639.99,
    description: `【Powerful CPU&GPU】 Intel Core i3-1115G4 (up to 4.1 GHz with Intel Turbo Boost Technology, 6 MB L3 cache, 2 cores, 4 threads), Intel UHD Graphics provide everyday image quality for Internet use, basic photo editing and casual gaming.
    【Memory&Hard Drive】Ram is expandable up to 36GB DDR4 Memory for fast processing and advanced multitasking , Hard Drive is expandable up to 2TB PCIe SSD. SSD(Solid State Drive) has faster data access speed, better performance and greater reliability, HDD provide larger storage so you could store more data and files on it. Please refer to item tile for your configuration`,
    img1: 'https://m.media-amazon.com/images/I/61iYCuksroL._AC_SL1200_.jpg',
    img2: 'https://m.media-amazon.com/images/I/61WH-Cr1BUL._AC_SL1500_.jpg',
    img3: 'https://m.media-amazon.com/images/I/51cGl1o9v2L._AC_SL1500_.jpg',
    rating:4.5,
    link:"https://www.amazon.com/Lenovo-IdeaPad-Touchscreen-Fingerprint-Lightweight/dp/B09Q4PWRBC/ref=sr_1_2?qid=1647096079&refinements=p_89%3ALenovo%2Cp_n_feature_thirty-three_browse-bin%3A23720418011&rnid=23720416011&s=computers-intl-ship&sr=1-2",


  },
  {
    id: 3,
    name: 'Lenovo IdeaPad 5 Laptop, 14.0" FHD IPS Screen, Intel Corei5-1135G7 (>i7-1065G7), Intel Iris Xe Graphics, 16GB RAM, 1TB PCIe SSD, Webcam, Backlit KB, Wi-Fi 6, HDMI, USB-C, Win 10 Home',
    price: 859.99,
    description: `i5-1135G7 (4C / 8T, 2.4 / 4.2GHz, 8MB), Integrated Intel Iris Xe Graphics, Windows 10 Home 64 Operating System. Provide a smooth experience for your study and entertainment
    16GB Soldered DDR4-3200 RAM, 1TB PCIe NVMe SSD,
    14.0" FHD (1920x1080) IPS 300nits Anti-glare Display, 56.5Wh Battery max to 14 hr, Only 0.67” thin and 3.04 lbs weight
    720p Webcam, Backlit Keyboard, Fingerprint Reader, Wi-Fi 6, Bluetooth 5.1`,
    img1: 'https://m.media-amazon.com/images/I/611JIza1MNL._AC_SL1000_.jpg',
    img2: 'https://m.media-amazon.com/images/I/810XbxNsLyL._AC_SL1500_.jpg',
    img3: 'https://m.media-amazon.com/images/I/61YIzck7MCL._AC_SL1000_.jpg',
    rating:4.6,
    link:"https://www.amazon.com/Lenovo-IdeaPad-300nits-i7-10710U-Graphics/dp/B0952FBC2Z/ref=sr_1_8?qid=1647096079&refinements=p_89%3ALenovo%2Cp_n_feature_thirty-three_browse-bin%3A23720418011&rnid=23720416011&s=computers-intl-ship&sr=1-8",


  },
  {
    id: 4,
    name: 'Lenovo IdeaPad 5 15.6" FHD IPS Anti-Glare Laptop | AMD Ryzen 7 5700U | 16GB RAM | 512GB SSD | Backlit Keyboard | Fingerprint Reader | Windows 11 | TWE Cloth | Grey',
    price: 898.89,
    description: `【Detailed Configuration】Substantial high-bandwidth 16GB RAM to smoothly run your games and photo- and video-editing applications, as well as multiple programs and browser tabs all at once. A flash-based 512GB SSD has no moving parts, resulting in faster start-up times and data access, no noise, and reduced heat production and power draw on the battery.
    【AMD Ryzen 7 5700U】8 cores, 16threads, 1.8GHz. The perfect combination of performance, responsiveness, and battery life. Enjoy the boundary-breaking performance with AMD Ryzen 7 5700U processor. Stay productive with a fast-charging, long-lasting battery.
    【15.6" LED-Backlit IPS FHD (1920 x 1080) Non-touch Display】The 1920x1080 resolution boasts impressive color and clarity. Supports 1080p content.`,
    img1: 'https://m.media-amazon.com/images/I/71MEE44OVRL._AC_SL1500_.jpg',
    img2: 'https://m.media-amazon.com/images/I/71oFS-ZqmzL._AC_SL1500_.jpg',
    img3: 'https://m.media-amazon.com/images/I/61Sl4spcLJL._AC_SL1000_.jpg',
    rating:4.3,
    link:"https://www.amazon.com/Lenovo-IdeaPad-Anti-Glare-Keyboard-Fingerprint/dp/B09HWYY8BS/ref=sr_1_10?qid=1647096079&refinements=p_89%3ALenovo%2Cp_n_feature_thirty-three_browse-bin%3A23720418011&rnid=23720416011&s=computers-intl-ship&sr=1-10",


  },
  {
    id: 5,
    name: 'Lenovo IdeaPad 3i 15.6" FHD Gaming Laptop 2022, 11th Gen Intel i5-11300H(up to 4.4GHz), 16GB RAM 1TB NVMe SSD, GeForce GTX 1650, USB-A&C RJ45, Windows 11',
    price: 921.99,
    description: `【11th Gen Intel i5-11300H】Intel Core i5-11300H Processor, 4-core, 3.10 GHz based, up to 4.40, 8M Cache
    【15.6” FHD IPS Display】15.6" Full HD (1920x1080) IPS Anti-glare display. Nahimic Speaker System; 802.11ax Wifi, Bluetooth 5.0, Ethernet LAN (RJ-45),. 720p HD Webcam.
    【NVIDIA GeForce GTX 1650】Hit the sweet spot of ultimate GeForce gaming and impossibly sleek design with NVIDIA GTX graphics, designed to deliver the gaming performance you need in a thin, light form factor.
    【Windows 11 home】With a fresh new feel and tools that make it easier to be efficient, it has what you need for whatever’s next.`,
    img1: 'https://m.media-amazon.com/images/I/41K5Q7H9GrL._AC_.jpg',
    img2: 'https://m.media-amazon.com/images/I/51bMJEmV-LL._AC_SL1253_.jpg',
    img3: 'https://m.media-amazon.com/images/I/51KiyzuNgyL._AC_SL1253_.jpg',
    rating:5,
    link:"https://www.amazon.com/Lenovo-IdeaPad-Anti-Glare-Keyboard-Fingerprint/dp/B09HWYY8BS/ref=sr_1_10?qid=1647096079&refinements=p_89%3ALenovo%2Cp_n_feature_thirty-three_browse-bin%3A23720418011&rnid=23720416011&s=computers-intl-ship&sr=1-10",


  },
  {
    id: 6,
    name: '[Windows 11] Lenovo Legion 5 17.3" FHD 144Hz 300nits Gaming Laptop, Hexa-Core AMD Ryzen 5 5600H (Beat i5-11500H), 16GB DDR4 RAM, 512GB PCIe SSD, GeForce GTX 1650, Backlit Keyboard, 500GB External HD',
    price: 939,
    description: `AMD Ryzen 5 5600H Processor @ 3.3GHz (6 Cores, 12 Threads, 3MB L2 cache, 16MB L3 cache, up to 4.20GHz)
    17.3" FHD (1920x1080) IPS 300nits Anti-glare, 144Hz, 72% NTSC, Free-Sync, DC dimmer Display. NVI-DIA GeForce GTX 1650 Graphics backed by 4GB GDDR5 dedicated video memory for an ultrafast, advanced GPU to fuel your games.
    16GB DDR4 SDRAM Memory; 512GB PCIe NVMe M.2 SSD. This electronic gift, holiday gift offers a good experience for gaming, watching videos, browsing the web, remote work, or study from home.`,
    img1: 'https://m.media-amazon.com/images/I/81FN8aW4r1L._AC_SL1500_.jpg',
    img2: 'https://m.media-amazon.com/images/I/81FN8aW4r1L._AC_SL1500_.jpg',
    img3: 'https://m.media-amazon.com/images/I/61gDbJwrOAL._AC_SL1500_.jpg',
    rating:4.6,
    link:"https://www.amazon.com/Lenovo-IdeaPad-Anti-Glare-Keyboard-Fingerprint/dp/B09HWYY8BS/ref=sr_1_10?qid=1647096079&refinements=p_89%3ALenovo%2Cp_n_feature_thirty-three_browse-bin%3A23720418011&rnid=23720416011&s=computers-intl-ship&sr=1-10",


  },
  {
    id: 7,
    name: 'Lenovo ThinkPad T14s Light Slim Laptop, 14" FHD IPS 300nits Touchscreen, AMD Ryzen5 Pro 4650U, USB-C, Wi-Fi 6, Rapid Charge, Backlit Keyboard, HDMI, Win10 Pro, w/HDMI Cable(16GB RAM | 512GB PCIe SSD)',
    price: 937.99,
    description: `1. AMD Ryzen 5 Pro 4650U Processor (2.10 GHz, up to 4.00 GHz Max Boost, 6 Cores, 12 Threads, 8 MB Cache). Windows 10 Pro. Bundled with HDMI Cable.
    2. 14.0" FHD (1920 x 1080) IPS, 300nits Touchscreen, anti-glare, low-power; Integrated AMD Radeon Graphics. This item will be shipped from Happy Ranger.
    3. 16GB DDR4 RAM high speed system memory, 512GB PCIe SSD storage.
    4. Port/ Slots: Smart card reader, USB 3.2 Gen 1 (always on), Kensington lock slot, USB-C power input, USB-C Gen 2, Network extension for Ethernet/side mechanical docking, USB 3.2 Gen 1, HDMI, Headphone / mic combo.`,
    img1: 'https://m.media-amazon.com/images/I/71+5cBzxWsL._AC_SL1500_.jpg',
    img2: 'https://m.media-amazon.com/images/I/61vXbNezieL._AC_SL1500_.jpg',
    img3: 'https://m.media-amazon.com/images/I/61DQ7+nKCoL._AC_SL1500_.jpg',
    rating:5,
    link:"https://www.amazon.com/Lenovo-ThinkPad-300nits-Touchscreen-Keyboard/dp/B09S3DQYCC/ref=sr_1_25?qid=1647096209&refinements=p_89%3ALenovo%2Cp_n_feature_thirty-three_browse-bin%3A23720418011&rnid=23720416011&s=computers-intl-ship&sr=1-25",


  },
  {
    id: 8,
    name: 'Lenovo ThinkPad E15 Gen 2 15.6" FHD Business Laptop Computer, Intel Quad-Core i5-1135G7 up to 4.2GHz (Beat i7-1065G7), 8GB DDR4 RAM, 512GB PCIe SSD, WiFi 6, BT 5.2, Windows 10 Pro, 64GB Flash Drive',
    price: 969.99,
    description: `▌Upgraded ▌Seal is opened for upgrade ONLY, Upgrade from base: 8GB DDR4 RAM, 256GB PCIe SSD; 1 year warraty on Upgraded RAM/SSD from Seller, and original 1-Year Manufacture warranty on remaining components. latest 11th Gen Intel Core i5-1135G7 Processor @ 2.40GHz(4 Cores, 8 Threads, 8M Cache, up to 4.20 GHz)
    ▌Non-Touch Display ▌15.6" FHD (1920x1080) TN 220nits Anti-glare Display; Intel Iris Xᵉ Graphics. 720p with Privacy Shutter camera with 2x, Array microphones Ideal for Home, Student, Professionals, Small Business, School Education, and Commercial Enterprise, Online Class, Google Classroom, Remote Learning, Zoom Ready.
    Memory: 8GB DDR4-3200; Storage: 512GB SSD M.2 2242 PCIe 3.0x4 NVMe; Optical Drive: Optical drive not included. This electronic gift, holiday gift offers a good experience for watching videos, browsing the web, remote work, or study from home.`,
    img1: 'https://m.media-amazon.com/images/I/61qdZ5HmnFL._AC_SL1500_.jpg',
    img2: 'https://m.media-amazon.com/images/I/61-CC2vK8yS._AC_SL1500_.jpg',
    img3: 'https://m.media-amazon.com/images/I/71-o4xYe6tL._AC_SL1500_.jpg',
    rating:4.6,
    link:"https://www.amazon.com/Lenovo-ThinkPad-E15-Octa-Core-i7-1065G7/dp/B08HML166X/ref=sr_1_30?qid=1647096209&refinements=p_89%3ALenovo%2Cp_n_feature_thirty-three_browse-bin%3A23720418011&rnid=23720416011&s=computers-intl-ship&sr=1-30",


  },
  {
    id: 9,
    name: '2022 Lenovo Legion Gaming Laptop, 17.3" FHD IPS Diaplay, AMD Ryzen 5 5600H 6-Core Processor (Beats i7-10850H), GeForce GTX 1650 Graphics, 16GB RAM, 1TB SSD, Backlit Keyboard, Wi-Fi 6, Windows 11',
    price: 1049.99,
    description: `【Upgraded】RAM is upgraded to 16 GB high-bandwidth RAM to smoothly run multiple applications and browser tabs all at once; Hard Drive is upgraded to 1 TB Solid State Drive to allow faster bootup and data transfer.
    【Display】17.3" 1920 x 1080 IPS Display
    【Operating System】Windows 11 Home, 64-bit, English
    【Connectivity】Bluetooth | 802.11ax | Backlit Keyboard | Microfiber Cloth included`,
    img1: 'https://m.media-amazon.com/images/I/71jx6w2AscL._AC_SL1428_.jpg',
    img2: 'https://m.media-amazon.com/images/I/61ehIXQ8NGL._AC_SL1500_.jpg',
    img3: 'https://m.media-amazon.com/images/I/71yGcKbpRxL._AC_SL1500_.jpg',
    rating:4.2,
    link:"https://www.amazon.com/Lenovo-Legion-Processor-i7-10850H-Graphics/dp/B09PC8B42Z/ref=sr_1_25?qid=1647096209&refinements=p_89%3ALenovo%2Cp_n_feature_thirty-three_browse-bin%3A23720418011&rnid=23720416011&s=computers-intl-ship&sr=1-25",


  },
  {
    id: 10,
    name: 'Lenovo Legion Y540 15.6" Gaming Laptop 144Hz i7-9750H 16GB RAM 256GB SSD GTX 1660Ti 6GB - 9th Gen i7-9750H Hexa-Core - 144Hz Refresh Rate - NVIDIA GeForce GTX 1660Ti 6GB GDDR6 - Legion Ultimate S',
    price: 1030.00,
    description: `Processor Manufacturer:
    Intel Processor Type: Core i7
    Processor Generation: 9th Gen
    Processor Model: i7-9750H
    Processor Core: Hexa-core (6 Core)`,
    img1: 'https://m.media-amazon.com/images/I/71yGcKbpRxL._AC_SL1500_.jpg',
    img2: 'https://m.media-amazon.com/images/I/41bR7-RwfOL._AC_.jpg',
    img3: 'https://m.media-amazon.com/images/I/31bqpwMHSYL._AC_.jpg',
    rating:4.6,
    link:"https://www.amazon.com/Lenovo-Legion-Gaming-Laptop-i7-9750H/dp/B08739LDJY/ref=sr_1_34?qid=1647096209&refinements=p_89%3ALenovo%2Cp_n_feature_thirty-three_browse-bin%3A23720418011&rnid=23720416011&s=computers-intl-ship&sr=1-34 ",


  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
