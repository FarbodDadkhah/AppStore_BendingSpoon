const store = require('app-store-scraper');
const fs = require('fs');

// apps by developer , Bending spoon devId:1280299077
(async () => {
    const developer_apps = await store.developer({devId: 1280299077});

    fs.writeFileSync('developer_apps_data/developer_apps.json', JSON.stringify(developer_apps, null, 2));
    console.log("App data saved to developer_apps.json");
})();




// List of apps with IDs and titles
const apps = [
    { id: 409838725, title: "Splice - Video Editor & Maker" },
    { id: 1470373330, title: "Remini - AI Photo Enhancer" },
    { id: 1099771240, title: "30 Day Fitness - Home Workout" },
    { id: 1459833443, title: "Alight Motion" },
    { id: 1447478883, title: "Sleep" },
    { id: 436577167, title: "Filmic Pro－Video Camera" },
    { id: 1148951074, title: "Yoga: Poses and Moves at Home" },
    { id: 1461690085, title: "Focos Live" },
    { id: 1478041592, title: "DoubleTake - Multicam video" },
    { id: 6443816015, title: "Filmic Legacy" },
    { id: 1274938524, title: "Focos" },
    { id: 1482338564, title: "Filmic Firstlight - Photo App" },
];


// 
const saveToJson = (data, filename) => {
    fs.writeFileSync(filename, JSON.stringify(data, null, 2));
    console.log(`Data saved to ${filename}`);
};

// apps data 
(async () => {
    for (const app of apps) {
        try {
            const appData = await store.app({ id: app.id, ratings: true });
            const sanitizedTitle = app.title.replace(/[^a-zA-Z0-9]/g, '_'); // Sanitize filename
            const filename = `dev_data/appsdata/${sanitizedTitle}_data.json`;
            saveToJson(appData, filename);
        } catch (error) {
            console.error(`Failed to fetch data for ${app.title}:`, error.message);
        }
    }
})();



// reviews


    (async () => {
        try {
          const italy_helpful_appstore = await store.reviews({ 
            id: 1470373330,
            country: 'it',
            sort: store.sort.HELPFUL,
            page: 10
          });
      
          saveToJson(italy_helpful_appstore, `dev_data/remini_reviews_data/italy_helpful_sample.json`);
      
        } catch (error) {
          console.error(`Failed to fetch data:`, error.message); 
        }
      })();

      (async () => {
        try {
          const italy_recent_appstore = await store.reviews({ 
            id: 1470373330,
            country: 'it',
            sort: store.sort.RECENT,
            page: 10
          });
      
          saveToJson(italy_helpful_appstore, `dev_data/remini_reviews_data/italy_recent_sample.json`);
      
        } catch (error) {
          console.error(`Failed to fetch data:`, error.message); 
        }
      })();


      (async () => {
        try {
          const us_recent_appstore = await store.reviews({ 
            id: 1470373330,
            country: 'us',
            sort: store.sort.RECENT,
            page: 10
          });
      
          saveToJson(us_recent_appstore, `dev_data/remini_reviews_data/us_recent_sample.json`);
      
        } catch (error) {
          console.error(`Failed to fetch data:`, error.message); 
        }
      })();

      (async () => {
        try {
          const us_helpful_appstore = await store.reviews({ 
            id: 1470373330,
            country: 'us',
            sort: store.sort.HELPFUL,
            page: 10
          });
      
          saveToJson(us_helpful_appstore, `dev_data/remini_reviews_data/us_helpful_sample.json`);
      
        } catch (error) {
          console.error(`Failed to fetch data:`, error.message); 
        }
      })();
