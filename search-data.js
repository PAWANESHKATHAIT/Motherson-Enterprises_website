// search-data.js
const items = [
    // Housekeeping Items
    { name: 'Hand Mop', category: 'Housekeeping Items', link: 'housekeeping.html' },
    { name: 'Dust Picker No. 62', category: 'Housekeeping Items', link: 'housekeeping.html' },
    { name: 'Wet Mop', category: 'Housekeeping Items', link: 'housekeeping.html' },
    { name: 'Dry Mop', category: 'Housekeeping Items', link: 'housekeeping.html' },
    { name: 'Glass Wiper', category: 'Housekeeping Items', link: 'housekeeping.html' },
    { name: 'Floor Wiper', category: 'Housekeeping Items', link: 'housekeeping.html' },
    { name: 'Room Freshener Bottle', category: 'Housekeeping Items', link: 'housekeeping.html' },
    { name: 'Colin Bottle', category: 'Housekeeping Items', link: 'housekeeping.html' },
    { name: 'Cobweb Brush', category: 'Housekeeping Items', link: 'housekeeping.html' },
    { name: 'Harpic Bottle', category: 'Housekeeping Items', link: 'housekeeping.html' },
    { name: 'Odonil Home Freshener', category: 'Housekeeping Items', link: 'housekeeping.html' },
    { name: 'Scorch Bright (Magic)', category: 'Housekeeping Items', link: 'housekeeping.html' },
    { name: 'Floor Duster', category: 'Housekeeping Items', link: 'housekeeping.html' },
    { name: 'Table Duster', category: 'Housekeeping Items', link: 'housekeeping.html' },
    { name: 'Micro Fiber Cloth', category: 'Housekeeping Items', link: 'housekeeping.html' },
    { name: 'Soft Brooms', category: 'Housekeeping Items', link: 'housekeeping.html' },
    { name: 'Hard Brooms', category: 'Housekeeping Items', link: 'housekeeping.html' },
    { name: 'Acid (Super Lime a way) - 1 Liter', category: 'Housekeeping Items', link: 'housekeeping.html' },
    { name: 'Phenyl - 1 Liter', category: 'Housekeeping Items', link: 'housekeeping.html' },
    { name: 'Naphthalene Balls', category: 'Housekeeping Items', link: 'housekeeping.html' },
    { name: 'Dettol (500 ml) Bottle - 500 ml', category: 'Housekeeping Items', link: 'housekeeping.html' },
    { name: 'Vim Powder (5 kg)', category: 'Housekeeping Items', link: 'housekeeping.html' },

    // Computer Accessories
    { name: 'Mechanical Keyboards', category: 'Computer Accessories', link: 'computeraccessories.html' },
    { name: 'Wireless Keyboards', category: 'Computer Accessories', link: 'computeraccessories.html' },
    { name: 'Ergonomic Keyboards', category: 'Computer Accessories', link: 'computeraccessories.html' },
    { name: 'Gaming Keyboards', category: 'Computer Accessories', link: 'computeraccessories.html' },
    { name: 'Optical Mice', category: 'Computer Accessories', link: 'computeraccessories.html' },
    { name: 'Wireless Mice', category: 'Computer Accessories', link: 'computeraccessories.html' },
    { name: 'Gaming Mice', category: 'Computer Accessories', link: 'computeraccessories.html' },
    { name: 'Ergonomic Mice', category: 'Computer Accessories', link: 'computeraccessories.html' },
    { name: 'LED Monitors', category: 'Computer Accessories', link: 'computeraccessories.html' },
    { name: 'Curved Monitors', category: 'Computer Accessories', link: 'computeraccessories.html' },
    { name: '4K Monitors', category: 'Computer Accessories', link: 'computeraccessories.html' },
    { name: 'Gaming Monitors', category: 'Computer Accessories', link: 'computeraccessories.html' },
    { name: 'Inkjet Printers', category: 'Computer Accessories', link: 'computeraccessories.html' },
    { name: 'Laser Printers', category: 'Computer Accessories', link: 'computeraccessories.html' },
    { name: 'All-in-One Printers', category: 'Computer Accessories', link: 'computeraccessories.html' },
    { name: 'Photo Printers', category: 'Computer Accessories', link: 'computeraccessories.html' },
    { name: 'External Hard Drives', category: 'Computer Accessories', link: 'computeraccessories.html' },
    { name: 'SSDs', category: 'Computer Accessories', link: 'computeraccessories.html' },
    { name: 'USB Flash Drives', category: 'Computer Accessories', link: 'computeraccessories.html' },
    { name: 'Network Attached Storage', category: 'Computer Accessories', link: 'computeraccessories.html' },
    { name: 'Routers', category: 'Computer Accessories', link: 'computeraccessories.html' },
    { name: 'Network Switches', category: 'Computer Accessories', link: 'computeraccessories.html' },
    { name: 'Wi-Fi Extenders', category: 'Computer Accessories', link: 'computeraccessories.html' },
    { name: 'Ethernet Cables', category: 'Computer Accessories', link: 'computeraccessories.html' },
    { name: 'Headphones', category: 'Computer Accessories', link: 'computeraccessories.html' },
    { name: 'Earbuds', category: 'Computer Accessories', link: 'computeraccessories.html' },
    { name: 'Speakers', category: 'Computer Accessories', link: 'computeraccessories.html' },
    { name: 'Microphones', category: 'Computer Accessories', link: 'computeraccessories.html' },
    { name: 'Surge Protectors', category: 'Computer Accessories', link: 'computeraccessories.html' },
    { name: 'UPS', category: 'Computer Accessories', link: 'computeraccessories.html' },
    { name: 'Power Strips', category: 'Computer Accessories', link: 'computeraccessories.html' },
    { name: 'HDMI Cables', category: 'Computer Accessories', link: 'computeraccessories.html' },
    { name: 'DisplayPort Cables', category: 'Computer Accessories', link: 'computeraccessories.html' },
    { name: 'USB Cables', category: 'Computer Accessories', link: 'computeraccessories.html' },
    { name: 'VGA Cables', category: 'Computer Accessories', link: 'computeraccessories.html' },
    { name: 'USB Hubs', category: 'Computer Accessories', link: 'computeraccessories.html' },
    { name: 'Docking Stations', category: 'Computer Accessories', link: 'computeraccessories.html' },
    { name: 'Laptop Cooling Pads', category: 'Computer Accessories', link: 'computeraccessories.html' },
    { name: 'Desktop Cooling Fans', category: 'Computer Accessories', link: 'computeraccessories.html' },
    { name: 'Liquid Cooling Systems', category: 'Computer Accessories', link: 'computeraccessories.html' },
    { name: 'Monitor Stands', category: 'Computer Accessories', link: 'computeraccessories.html' },
    { name: 'Laptop Stands', category: 'Computer Accessories', link: 'computeraccessories.html' },
    { name: 'Monitor Mounts', category: 'Computer Accessories', link: 'computeraccessories.html' },
    { name: 'Operating Systems', category: 'Computer Accessories', link: 'computeraccessories.html' },
    { name: 'Antivirus Software', category: 'Computer Accessories', link: 'computeraccessories.html' },
    { name: 'Office Suites', category: 'Computer Accessories', link: 'computeraccessories.html' },
    { name: 'Graphic Tablets', category: 'Computer Accessories', link: 'computeraccessories.html' },
    { name: 'Stylus Pens', category: 'Computer Accessories', link: 'computeraccessories.html' },
    { name: 'Game Controllers', category: 'Computer Accessories', link: 'computeraccessories.html' },
    { name: 'Laptop Bags', category: 'Computer Accessories', link: 'computeraccessories.html' },
    { name: 'Backpacks', category: 'Computer Accessories', link: 'computeraccessories.html' },
    { name: 'Sleeves', category: 'Computer Accessories', link: 'computeraccessories.html' },
    { name: 'Cleaning Kits', category: 'Computer Accessories', link: 'computeraccessories.html' },
    { name: 'Screen Protectors', category: 'Computer Accessories', link: 'computeraccessories.html' },
    { name: 'Wrist Rests', category: 'Computer Accessories', link: 'computeraccessories.html' },
    { name: 'Mouse', category: 'Computer Accessories', link: 'computeraccessories.html' },

    // Office Stationery Items
    { name: 'Notebooks and Journals', category: 'Office Stationery Items', link: 'Office Stationery & Furniture.html' },
    { name: 'Pens', category: 'Office Stationery Items', link: 'Office Stationery & Furniture.html' },
    { name: 'Staplers', category: 'Office Stationery Items', link: 'Office Stationery & Furniture.html' },
    { name: 'Paper Clips', category: 'Office Stationery Items', link: 'Office Stationery & Furniture.html' },
    { name: 'Post-it Notes', category: 'Office Stationery Items', link: 'Office Stationery & Furniture.html' },
    { name: 'Highlighters', category: 'Office Stationery Items', link: 'Office Stationery & Furniture.html' },
    { name: 'Desk Organizers', category: 'Office Stationery Items', link: 'Office Stationery & Furniture.html' },
    { name: 'Folders and Binders', category: 'Office Stationery Items', link: 'Office Stationery & Furniture.html' },
    { name: 'Printer Paper', category: 'Office Stationery Items', link: 'Office Stationery & Furniture.html' },
    { name: 'Envelopes', category: 'Office Stationery Items', link: 'Office Stationery & Furniture.html' },
    { name: 'Scissors', category: 'Office Stationery Items', link: 'Office Stationery & Furniture.html' },
    { name: 'Tape Dispensers', category: 'Office Stationery Items', link: 'Office Stationery & Furniture.html' },
    { name: 'Correction Pens', category: 'Office Stationery Items', link: 'Office Stationery & Furniture.html' },
    { name: 'Calculators', category: 'Office Stationery Items', link: 'Office Stationery & Furniture.html' },
    { name: 'Whiteboard Markers', category: 'Office Stationery Items', link: 'Office Stationery & Furniture.html' },
    { name: 'Document Trays', category: 'Office Stationery Items', link: 'Office Stationery & Furniture.html' },
    { name: 'Sticky Flags', category: 'Office Stationery Items', link: 'Office Stationery & Furniture.html' },
    { name: 'Glue Sticks', category: 'Office Stationery Items', link: 'Office Stationery & Furniture.html' },
    { name: 'Erasers', category: 'Office Stationery Items', link: 'Office Stationery & Furniture.html' },
    { name: 'Rulers', category: 'Office Stationery Items', link: 'Office Stationery & Furniture.html' },

    // Crockery
    { name: 'Dinner Plates', category: 'Crockery & Cutlery Items', link: 'Crockery&Cutlery.html' },
    { name: 'Salad Plates', category: 'Crockery & Cutlery Items', link: 'Crockery&Cutlery.html' },
    { name: 'Dessert Plates', category: 'Crockery & Cutlery Items', link: 'Crockery&Cutlery.html' },
    { name: 'Bread and Butter Plates', category: 'Crockery & Cutlery Items', link: 'Crockery&Cutlery.html' },
    { name: 'Soup Bowls', category: 'Crockery & Cutlery Items', link: 'Crockery&Cutlery.html' },
    { name: 'Cereal Bowls', category: 'Crockery & Cutlery Items', link: 'Crockery&Cutlery.html' },
    { name: 'Dessert Bowls', category: 'Crockery & Cutlery Items', link: 'Crockery&Cutlery.html' },
    { name: 'Salad Bowls', category: 'Crockery & Cutlery Items', link: 'Crockery&Cutlery.html' },
    { name: 'Pasta Bowls', category: 'Crockery & Cutlery Items', link: 'Crockery&Cutlery.html' },
    { name: 'Serving Platters', category: 'Crockery & Cutlery Items', link: 'Crockery&Cutlery.html' },
    { name: 'Serving Bowls', category: 'Crockery & Cutlery Items', link: 'Crockery&Cutlery.html' },
    { name: 'Gravy Boats', category: 'Crockery & Cutlery Items', link: 'Crockery&Cutlery.html' },
    { name: 'Coffee Mugs', category: 'Crockery & Cutlery Items', link: 'Crockery&Cutlery.html' },
    { name: 'Tea Cups', category: 'Crockery & Cutlery Items', link: 'Crockery&Cutlery.html' },
    { name: 'Espresso Cups', category: 'Crockery & Cutlery Items', link: 'Crockery&Cutlery.html' },
    { name: 'Dipping Bowls', category: 'Crockery & Cutlery Items', link: 'Crockery&Cutlery.html' },
    { name: 'Sauce Boats', category: 'Crockery & Cutlery Items', link: 'Crockery&Cutlery.html' },
    { name: 'Soup Tureens', category: 'Crockery & Cutlery Items', link: 'Crockery&Cutlery.html' },

    // Cutlery
    { name: 'Dinner Knives', category: 'Crockery & Cutlery Items', link: 'Crockery&Cutlery.html' },
    { name: 'Steak Knives', category: 'Crockery & Cutlery Items', link: 'Crockery&Cutlery.html' },
    { name: 'Butter Knives', category: 'Crockery & Cutlery Items', link: 'Crockery&Cutlery.html' },
    { name: 'Paring Knives', category: 'Crockery & Cutlery Items', link: 'Crockery&Cutlery.html' },
    { name: 'Dinner Forks', category: 'Crockery & Cutlery Items', link: 'Crockery&Cutlery.html' },
    { name: 'Salad Forks', category: 'Crockery & Cutlery Items', link: 'Crockery&Cutlery.html' },
    { name: 'Dessert Forks', category: 'Crockery & Cutlery Items', link: 'Crockery&Cutlery.html' },
    { name: 'Seafood Forks', category: 'Crockery & Cutlery Items', link: 'Crockery&Cutlery.html' },
    { name: 'Soup Spoons', category: 'Crockery & Cutlery Items', link: 'Crockery&Cutlery.html' },
    { name: 'Teaspoons', category: 'Crockery & Cutlery Items', link: 'Crockery&Cutlery.html' },
    { name: 'Dessert Spoons', category: 'Crockery & Cutlery Items', link: 'Crockery&Cutlery.html' },
    { name: 'Serving Spoons', category: 'Crockery & Cutlery Items', link: 'Crockery&Cutlery.html' },
    { name: 'Ladles', category: 'Crockery & Cutlery Items', link: 'Crockery&Cutlery.html' },
    { name: 'Slotted Spoons', category: 'Crockery & Cutlery Items', link: 'Crockery&Cutlery.html' },
    { name: 'Serving Forks', category: 'Crockery & Cutlery Items', link: 'Crockery&Cutlery.html' },
    { name: 'Tongs', category: 'Crockery & Cutlery Items', link: 'Crockery&Cutlery.html' },
    { name: 'Cheese Knives', category: 'Crockery & Cutlery Items', link: 'Crockery&Cutlery.html' },
    { name: 'Cake Servers', category: 'Crockery & Cutlery Items', link: 'Crockery&Cutlery.html' },
    { name: 'Pie Servers', category: 'Crockery & Cutlery Items', link: 'Crockery&Cutlery.html' },

    // Office Furniture
    { name: 'Office Chairs', category: 'Office Furniture', link: 'Office Furniture.html' },
    { name: 'Desks', category: 'Office Furniture', link: 'Office Furniture.html' },
    { name: 'File Cabinets', category: 'Office Furniture', link: 'Office Furniture.html' },
    { name: 'Bookcases', category: 'Office Furniture', link: 'Office Furniture.html' },
    { name: 'Conference Tables', category: 'Office Furniture', link: 'Office Furniture.html' },
    { name: 'Standing Desks', category: 'Office Furniture', link: 'Office Furniture.html' },
    { name: 'Cubicles and Partitions', category: 'Office Furniture', link: 'Office Furniture.html' },
    { name: 'Reception Desks', category: 'Office Furniture', link: 'Office Furniture.html' },
    { name: 'Office Sofas', category: 'Office Furniture', link: 'Office Furniture.html' },
    { name: 'Lamps', category: 'Office Furniture', link: 'Office Furniture.html' },
    { name: 'Filing Cabinets', category: 'Office Furniture', link: 'Office Furniture.html' },
    { name: 'Office Tables', category: 'Office Furniture', link: 'Office Furniture.html' },
    { name: 'Meeting Room Chairs', category: 'Office Furniture', link: 'Office Furniture.html' },
    { name: 'Office Storage Units', category: 'Office Furniture', link: 'Office Furniture.html' },
    { name: 'Computer Desks', category: 'Office Furniture', link: 'Office Furniture.html' },
    { name: 'Ergonomic Chairs', category: 'Office Furniture', link: 'Office Furniture.html' },
    { name: 'Modular Workstations', category: 'Office Furniture', link: 'Office Furniture.html' },
    { name: 'Visitor Chairs', category: 'Office Furniture', link: 'Office Furniture.html' },
    { name: 'Coffee Tables', category: 'Office Furniture', link: 'Office Furniture.html' },
    { name: 'Coat Racks', category: 'Office Furniture', link: 'Office Furniture.html' },

    // Printing Stationery items
    { name: 'Letterhead', category: 'Printing Stationery items', link: 'PrintingStationery.html' },
    { name: 'Registers', category: 'Printing Stationery items', link: 'PrintingStationery.html' },
    { name: 'Account Book', category: 'Printing Stationery items', link: 'PrintingStationery.html' },
    { name: 'Bill Books/Cash Memo', category: 'Printing Stationery items', link: 'PrintingStationery.html' },
    { name: 'Certificates', category: 'Printing Stationery items', link: 'PrintingStationery.html' },
    { name: 'Writing Pad', category: 'Printing Stationery items', link: 'PrintingStationery.html' },
    { name: 'Posters', category: 'Printing Stationery items', link: 'PrintingStationery.html' },
    { name: 'Flag Banner', category: 'Printing Stationery items', link: 'PrintingStationery.html' },
    { name: 'Label/Sticker', category: 'Printing Stationery items', link: 'PrintingStationery.html' },
    { name: 'Brochure', category: 'Printing Stationery items', link: 'PrintingStationery.html' },
    { name: 'Visiting Card', category: 'Printing Stationery items', link: 'PrintingStationery.html' },
    { name: 'ID Card', category: 'Printing Stationery items', link: 'PrintingStationery.html' },
    // Add more items here
];