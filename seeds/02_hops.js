exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("hops")
    .del()
    .then(function() {
      // Inserts seed entries
      return Promise.all([
        knex("hops").insert([
          {
            id: 1,
            name: "Admiral",
            origin: 7,
            purpose: "bittering",
            alpha_acid_composition: 14.8,
            beta_acid_composition: 5.6,
            description:
              "Bittering hops derived from Wye Challenger. Good high-alpha bittering hops.Aroma: Primarily for bittering",
            sub_names: "Target, Northdown, Challenger",
            beer_style: "Ales"
          },
          {
            id: 2,
            name: "Ahtanum",
            origin: 8,
            purpose: "aroma",
            alpha_acid_composition: 6.0,
            beta_acid_composition: 5.3,
            description:
              "Distinctive aromatic hops with moderate bittering power from Washington.Aroma: Distinctive floral and citrus aromas",
            sub_names: "Amarillo, Cascade",
            beer_style: "American ales and lagers"
          },
          {
            id: 3,
            name: "Amarillo",
            origin: 8,
            purpose: "aroma",
            alpha_acid_composition: 8.5,
            beta_acid_composition: 6.0,
            description:
              "Unknown origin, but character similar to Cascade.  Used for both bitterness and aroma.Aroma: Citrus, flowery",
            sub_names: "Cascade, Centennial",
            beer_style: "IPAs, Ales"
          },
          {
            id: 4,
            name: "Apollo",
            origin: 8,
            purpose: "bittering",
            alpha_acid_composition: 17.0,
            beta_acid_composition: 6.8,
            description:
              "Super high alpha variety from the Hopsteiner breeding program released in 2006.  High alpha and low cohumulone makes it a great bittering hop.  Adds a strong grapefruit/hop note if added late in boil.  ",
            sub_names: "Nugget, Columbus, Tomahawk, Zeus",
            beer_style: ""
          },
          {
            id: 5,
            name: "Aquila",
            origin: 8,
            purpose: "aroma",
            alpha_acid_composition: 6.5,
            beta_acid_composition: 3.0,
            description:
              "Aroma hops developed in 1988.  Limited use due to high cohumolone.No longer commercially grown.",
            sub_names: "Cluster",
            beer_style: "Aroma hops"
          },
          {
            id: 6,
            name: "Atlas",
            origin: 10,
            purpose: "bittering",
            alpha_acid_composition: 9.0,
            beta_acid_composition: 3.7,
            description:
              "A cross between Brewers Gold and Slovenian wild hops.  Primarily a bittering hop with pleasant bitterness and aroma.  ",
            sub_names: "Brewers Gold",
            beer_style: "Bittering ales, lagers"
          },
          {
            id: 7,
            name: "Aurora",
            origin: 10,
            purpose: "dual",
            alpha_acid_composition: 8.3,
            beta_acid_composition: 3.5,
            description:
              "Also called Super Styrian.  This is a hybrid between Northern Brewer and TG.  It has a pleasant hoppy aroma similar to Styrian Goldings but lighter.  ",
            sub_names: "Styrian Goldings",
            beer_style: "Often mixed with other hops in lagers."
          },
          {
            id: 8,
            name: "Banner",
            origin: 8,
            purpose: "bittering",
            alpha_acid_composition: 10.0,
            beta_acid_composition: 4.0,
            description:
              "Bittering hops developed in 1988.  Use largely discontinued due to poor storage.",
            sub_names: "Cluster",
            beer_style: "US style ales"
          },
          {
            id: 9,
            name: "Bobek",
            origin: 10,
            purpose: "dual",
            alpha_acid_composition: 5.3,
            beta_acid_composition: 5.0,
            description:
              "Also called Styrian Golding B - a cross between Northern Brewer and a TG seedling.  Pleasant hop aroma and flavor.  ",
            sub_names: "Northern Brewer",
            beer_style: "Moderate English ales and lagers/Pilsners"
          },
          {
            id: 10,
            name: "Bramling Cross",
            origin: 7,
            purpose: "aroma",
            alpha_acid_composition: 6.0,
            beta_acid_composition: 3.0,
            description:
              "Developed in 1927 from commercial Goldings and wild hop variety.Aroma: Mild, fruity, currant aroma.",
            sub_names: "East Kent Goldings, Progress, Whitbred",
            beer_style: "ESB, Bitters, Pale Ale"
          },
          {
            id: 11,
            name: "Bravo",
            origin: 8,
            purpose: "bittering",
            alpha_acid_composition: 15.5,
            beta_acid_composition: 3.5,
            description:
              "A second generation super high alpha hops from the Hopsteiner breeding program released in 2006.  Good bittering hop.Aroma: Fruity and floral aroma.",
            sub_names: "Columbus, Zeus, Tomahawk",
            beer_style: ""
          },
          {
            id: 12,
            name: "Brewers Gold",
            origin: 7,
            purpose: "bittering",
            alpha_acid_composition: 8.0,
            beta_acid_composition: 3.7,
            description:
              "Traditional bittering hops for English ales and heavy German lagers.Aroma: Sharp bittering hopExample: Petes Wicked Ale",
            sub_names: "Northern Brewer, Galena, Chinook, Eroica",
            beer_style: ""
          },
          {
            id: 13,
            name: "Bullion",
            origin: 7,
            purpose: "bittering",
            alpha_acid_composition: 8.0,
            beta_acid_composition: 4.5,
            description:
              "Used in strong dark English ales, some heavy German lagers.Aroma: Strong, pungent and bitter in flavor.  Blackcurrant flavor.",
            sub_names: "Chinook, Eroica, Brewers Gold",
            beer_style: ""
          },
          {
            id: 14,
            name: "Cascade - 2014-06 Hopunion",
            origin: 8,
            purpose: "dual",
            alpha_acid_composition: 7.1,
            beta_acid_composition: 6.6,
            description:
              "A hops with Northern Brewers HeritageAroma: Strong spicy, floral, grapefruit characterExamples: Sierra Nevada Pale Ale, Anchor Liberty Ale",
            sub_names: "Centennial",
            beer_style: "American ales and lagers"
          },
          {
            id: 15,
            name: "Celeia",
            origin: 10,
            purpose: "dual",
            alpha_acid_composition: 4.5,
            beta_acid_composition: 2.6,
            description:
              "A dual hops that is a hybrid between Savinjski Golding, Aurora and Slovenian wild hops.  Similar in aroma to Saaz.  ",
            sub_names: "Saaz, Styrian Goldings",
            beer_style: "Light lagers, Pilsners, Belgian ales."
          },
          {
            id: 16,
            name: "Centennial",
            origin: 8,
            purpose: "bittering",
            alpha_acid_composition: 10.0,
            beta_acid_composition: 4.0,
            description:
              "Aroma: Floral, citrus aroma, spicy, clean bittering flavorExamples: Sierra Nevada Celebration Ale, Sierra Nevada Bigfoot",
            sub_names: "Galena, Eroica, Nugget, Bullion",
            beer_style:
              "General purpose bittering, aroma in American ales and Wheats"
          },
          {
            id: 17,
            name: "Challenger",
            origin: 7,
            purpose: "aroma",
            alpha_acid_composition: 7.5,
            beta_acid_composition: 4.0,
            description:
              "Variant of Northern Brewers heritageAroma: Fruity in flavor, spicy aroma, blends well",
            sub_names: "N/A",
            beer_style: "Both aroma and bittering for ales and lagers"
          },
          {
            id: 18,
            name: "Chelan",
            origin: 8,
            purpose: "bittering",
            alpha_acid_composition: 13.3,
            beta_acid_composition: 9.3,
            description:
              "High alpha variety from the Haas breeding program released in 2004.  It is a variant of Galena and very similar in profile to Galena.Aroma: Pleasant citrus notes  ",
            sub_names: "Galena",
            beer_style: ""
          },
          {
            id: 19,
            name: "Chinook",
            origin: 8,
            purpose: "bittering",
            alpha_acid_composition: 13.0,
            beta_acid_composition: 3.6,
            description:
              "Strong versatile bittering hopAroma: Heavy and spicy aromaExamples: Sierra Nevada Stout, Sierra Nevada Celebration Ale",
            sub_names: "Galena, Eroica, Nugget, Bullion",
            beer_style: "Ales, porters, stouts"
          },
          {
            id: 20,
            name: "Citra",
            origin: 8,
            purpose: "dual",
            alpha_acid_composition: 12.0,
            beta_acid_composition: 4.0,
            description:
              "Special aroma hops released in 2007.  Imparts high alpha/oil content but low cohumulone.Aroma: Adds interesting citrus and tropical fruit character to the beer.  ",
            sub_names: "Unknown",
            beer_style: ""
          },
          {
            id: 21,
            name: "Cluster",
            origin: 8,
            purpose: "bittering",
            alpha_acid_composition: 7.0,
            beta_acid_composition: 4.8,
            description:
              "Aroma: Floral, slightly spicy. Sharp aroma and sharp flavor",
            sub_names: "Eroica, Galena",
            beer_style: "General purpose bittering hop"
          },
          {
            id: 22,
            name: "Columbia",
            origin: 7,
            purpose: "bittering",
            alpha_acid_composition: 5.5,
            beta_acid_composition: 3.0,
            description: "Sibling of Williamette hops.Aroma: Close to Fuggles",
            sub_names: "Fuggles, Williamette",
            beer_style: "All English Ales"
          },
          {
            id: 23,
            name: "Columbus (Tomahawk)",
            origin: 8,
            purpose: "bittering",
            alpha_acid_composition: 14.0,
            beta_acid_composition: 5.0,
            description:
              "Engineered Centennial Substitute - High alpha bittering hops.Aroma: Pungent, spicy. Strongly aromatic, but clean tasting bitterness",
            sub_names: "Centennial",
            beer_style:
              "Bittering, flavor, aroma - IPA, American Pale Ale, Stout, Lager"
          },
          {
            id: 24,
            name: "Comet - 2013-08 - Hopsdirect",
            origin: 8,
            purpose: "bittering",
            alpha_acid_composition: 10.9,
            beta_acid_composition: 4.0,
            description: "Very bitter hops - use sparingly with other hops",
            sub_names: "N/A",
            beer_style: "Bittering only"
          },
          {
            id: 26,
            name: "Eroica",
            origin: 8,
            purpose: "bittering",
            alpha_acid_composition: 13.0,
            beta_acid_composition: 4.8,
            description:
              "Aroma: Clean bittering hop, very bitterExamples: Blackhook Porter, Ballard Bitter",
            sub_names: "Galena, Northern Brewer, Chinook",
            beer_style: "General purpose bittering for ales, porters, stouts"
          },
          {
            id: 27,
            name: "Feux Coeur Francais",
            origin: 1,
            purpose: "bittering",
            alpha_acid_composition: 14.0,
            beta_acid_composition: 6.0,
            description:
              "Rare, high alpha hops from Australia with genetic roots in the Burgundy region of France.  It was adopted to the Victoria region of Australia and introduced in 2010.",
            sub_names: "",
            beer_style: ""
          },
          {
            id: 28,
            name: "First Gold",
            origin: 7,
            purpose: "dual",
            alpha_acid_composition: 7.5,
            beta_acid_composition: 3.5,
            description:
              "Dwarf hop with English Golding characterAroma: Similar to other Golding varieties, spicy",
            sub_names: "East Kent Goldings, Crystal",
            beer_style: "Ales, ESB"
          },
          {
            id: 29,
            name: "Fuggles",
            origin: 7,
            purpose: "aroma",
            alpha_acid_composition: 4.5,
            beta_acid_composition: 2.0,
            description:
              "Aroma: Mild, soft, grassy, floral aromaSubstitute: East Kent Goldings, WilliametteExamples: Samuel Smiths Pale Ale, Old Peculiar, Thomas Hardys Ale",
            sub_names: "",
            beer_style:
              "General purpose bittering/aroma for English Ales, Dark Lagers"
          },
          {
            id: 30,
            name: "Galaxy",
            origin: 1,
            purpose: "bittering",
            alpha_acid_composition: 14.0,
            beta_acid_composition: 5.9,
            description:
              "A high alpha, dual seedless hops with a unique hop aroma.  It can be used either for bittering or as a late hop addition to provide a flavor of citrus and passionfruit to the finished beer.Aroma: Intense, pleasant, unique.",
            sub_names: "",
            beer_style: ""
          },
          {
            id: 31,
            name: "Galena",
            origin: 8,
            purpose: "bittering",
            alpha_acid_composition: 12.5,
            beta_acid_composition: 8.0,
            description:
              "Aroma: Strong, clean, balanced bitteringExamples: Catamount Porter",
            sub_names: "Eroica, Northern Brewer, Cluster, Chinook",
            beer_style: "General bittering hops for all beers"
          },
          {
            id: 32,
            name: "Glacier",
            origin: 8,
            purpose: "aroma",
            alpha_acid_composition: 5.6,
            beta_acid_composition: 7.6,
            description:
              "Genetic mix of at least 8 hops including Elsasser, Brewers Gold, N Brewer, Bullion, Early Green, and others...released in 2000.Aroma: Excellent, hoppy",
            sub_names: "N/A",
            beer_style: "Aroma"
          },
          {
            id: 33,
            name: "Goldings, B.C.",
            origin: 3,
            purpose: "aroma",
            alpha_acid_composition: 5.0,
            beta_acid_composition: 3.2,
            description: "Aroma: Spicy, floral, rounded mild aroma.",
            sub_names: "East Kent Goldings, Fuggles",
            beer_style:
              "Bittering and finishing British ales, bitters, porters and stouts."
          },
          {
            id: 34,
            name: "Goldings, Kent - 2013-09 - HE",
            origin: 7,
            purpose: "aroma",
            alpha_acid_composition: 5.0,
            beta_acid_composition: 3.5,
            description:
              "Aroma: Floral, aromatic, earthy, slightly sweet spicy flavorExamples: Bass Pale Ale, Fullers ESB, Samual Smiths Pale Ale",
            sub_names: "Fuggles, BC Goldings",
            beer_style:
              "General purpose hops for bittering/finishing all British Ales"
          },
          {
            id: 35,
            name: "Green Bullet",
            origin: 11,
            purpose: "bittering",
            alpha_acid_composition: 13.5,
            beta_acid_composition: 7.0,
            description:
              "Bittering hops from New Zealand developed in 1972Aroma: Floral, raisin aroma.",
            sub_names: "Styrian Goldings",
            beer_style: "Australian-style ales and lagers."
          },
          {
            id: 36,
            name: "Greenburg",
            origin: 8,
            purpose: "aroma",
            alpha_acid_composition: 5.2,
            beta_acid_composition: 7.2,
            description:
              "American hop variety from southern Idaho.  Fruity flavor with a touch of wood flavor.  Popular with microbreweries.",
            sub_names: "",
            beer_style: ""
          },
          {
            id: 37,
            name: "Hallertauer",
            origin: 6,
            purpose: "aroma",
            alpha_acid_composition: 4.8,
            beta_acid_composition: 4.0,
            description:
              "Aroma: Pleasant, mild spicy flavor, clean, neutral flavor",
            sub_names: "Crystal, Liberty, Hallertauer Mittelfrueh",
            beer_style: "German Ales, German/US/Canadian Lagers, Wheat Beers"
          },
          {
            id: 38,
            name: "Hallertauer Hersbrucker",
            origin: 6,
            purpose: "aroma",
            alpha_acid_composition: 4.0,
            beta_acid_composition: 6.0,
            description:
              "Aroma: Noble, pleasant, clean flavorExamples: Wheathook Wheaten Ale",
            sub_names: "Mt. Hood, Liberty, Hallertauer, Mittelfrueh",
            beer_style: "German style lagers and wheat beers"
          },
          {
            id: 39,
            name: "Hallertauer Mittelfrueh",
            origin: 6,
            purpose: "aroma",
            alpha_acid_composition: 4.0,
            beta_acid_composition: 4.6,
            description:
              "Aroma: Pleasant, assertive, mild herbal aromaExamples: Sam Adams Boston Lager, Sam Adams Boston Lightship",
            sub_names: "Hallertauer, Mt. Hood, Liberty, Crystal",
            beer_style: "Continental Lagers, German Ales/Lagers, US Lagers"
          },
          {
            id: 40,
            name: "Hallertauer, New Zealand",
            origin: 11,
            purpose: "dual",
            alpha_acid_composition: 8.5,
            beta_acid_composition: 3.0,
            description:
              "Hallertauer variant with classic aroma and ability to retain clean taste. Bred from German Hallertauer Mittelfrueh",
            sub_names: "Hallertauer Mittelfrueh",
            beer_style: "Australian Ales"
          },
          {
            id: 41,
            name: "Herald",
            origin: 7,
            purpose: "bittering",
            alpha_acid_composition: 12.0,
            beta_acid_composition: 5.2,
            description:
              "Dwarf variety bred at Wye College (mid 1990s)Aroma: Strong, acceptable",
            sub_names: "High alpha English bittering hops",
            beer_style: "Bittering of ales"
          },
          {
            id: 42,
            name: "Horizon",
            origin: 8,
            purpose: "bittering",
            alpha_acid_composition: 12.0,
            beta_acid_composition: 7.5,
            description:
              "Good dual hops derived from Nugget hops in Oregon (1970)Aroma: Pleasant, hoppy",
            sub_names: "Magnum or other high alpha hops",
            beer_style: "All purpose Ales, Lagers"
          },
          {
            id: 43,
            name: "Liberty",
            origin: 8,
            purpose: "aroma",
            alpha_acid_composition: 4.3,
            beta_acid_composition: 3.5,
            description:
              "Aroma: Fine, mild, slightly spicy flavorExamples: Petes Wicked Lager",
            sub_names: "Hallertau, Mt Hood, Crystal",
            beer_style: "German style lagers"
          },
          {
            id: 44,
            name: "Lublin",
            origin: 12,
            purpose: "bittering",
            alpha_acid_composition: 5.0,
            beta_acid_composition: 3.0,
            description:
              'Version of Saaz grown in Poland - also called "Lubelski"Aroma: Noble, mild flavor similar to Saaz',
            sub_names: "Saaz, Tettnanger",
            beer_style: "Bohemian lagers and Pilsners"
          },
          {
            id: 45,
            name: "Magnum",
            origin: 6,
            purpose: "bittering",
            alpha_acid_composition: 14.0,
            beta_acid_composition: 6.5,
            description:
              "German Hallertauer hybrid, widely used in GermanyAroma: Good aroma and stable spicy flavor",
            sub_names: "N/A",
            beer_style: "German ales and lagers"
          },
          {
            id: 46,
            name: "Marynka",
            origin: 12,
            purpose: "bittering",
            alpha_acid_composition: 10.5,
            beta_acid_composition: 11.4,
            description:
              "Bittering hops with high aroma.  Primarily for use in Pilsner, lagers, ales or wheats.  Comparable to English Goldings or Chinook.  ",
            sub_names: "Chinook, English Golding",
            beer_style: "Lager, ales"
          },
          {
            id: 47,
            name: "Millenium",
            origin: 8,
            purpose: "bittering",
            alpha_acid_composition: 14.3,
            beta_acid_composition: 5.7,
            description:
              "Originally developed as part of the Haas breeding program in the US, Millenium entered production in 2000.  It is a very high alpha hops used for bittering.Aroma: Mild, herbal",
            sub_names: "Columbus, Tomahawk, Zeus and Nugget",
            beer_style: ""
          },
          {
            id: 48,
            name: "Motueka",
            origin: 11,
            purpose: "aroma",
            alpha_acid_composition: 7.0,
            beta_acid_composition: 5.3,
            description:
              "Flexible hop developed from Saaz.  Has notable character and aroma, balanced bitterness, and unique flavor.  ",
            sub_names: "Saaz",
            beer_style: "Lagers, Belgian Ales and Bohemian Pilsner."
          },
          {
            id: 49,
            name: "Mt. Hood",
            origin: 8,
            purpose: "aroma",
            alpha_acid_composition: 6.0,
            beta_acid_composition: 6.3,
            description:
              "Aroma: Mild with a clean aroma, neutral flavor. Somewhat pungent.",
            sub_names: "Hallertauer, Liberty, Crystal",
            beer_style: "European Lagers, finishing"
          },
          {
            id: 50,
            name: "Nelson Sauvin",
            origin: 11,
            purpose: "bittering",
            alpha_acid_composition: 12.0,
            beta_acid_composition: 7.0,
            description:
              'Triploid variety bred from "Smoothcone" released in 2000.  Oil profile said to taste like "fresh crushed gooseberries" similar to Sauvignon Blanc, giving it its name.  Very fruity, citrusy - use in moderation.  ',
            sub_names: "None",
            beer_style: "Pale ale, Super Premiums."
          },
          {
            id: 51,
            name: "Newport",
            origin: 8,
            purpose: "bittering",
            alpha_acid_composition: 13.5,
            beta_acid_composition: 6.0,
            description:
              "High alpha hops released in 2002 as a potential replacement for Galena.  Note that these hops have a large alpha range of 9.8%-17% so check the package!  Fairly pungent.",
            sub_names: "Galena",
            beer_style:
              "Primarily used for bittering in ales, stouts, barley wine."
          },
          {
            id: 52,
            name: "Northdown",
            origin: 7,
            purpose: "dual",
            alpha_acid_composition: 8.5,
            beta_acid_composition: 5.5,
            description:
              "Variation of Northern Brewers hops grown in England.Aroma: Good bittering, flavor and aroma",
            sub_names: "Northern Brewer",
            beer_style: "Bittering in English ales"
          },
          {
            id: 53,
            name: "Northern Brewer",
            origin: 6,
            purpose: "dual",
            alpha_acid_composition: 8.5,
            beta_acid_composition: 4.0,
            description:
              "Also called Hallertauer Northern BrewersAroma: Fine, dry, clean bittering hop.  Unique flavor.Examples: Anchor Steam, Old Peculiar,",
            sub_names: "Hallertauer Mittelfrueh, Hallertauer",
            beer_style:
              "Bittering and finishing both ales and lagers of all kinds"
          },
          {
            id: 54,
            name: "Nugget",
            origin: 8,
            purpose: "bittering",
            alpha_acid_composition: 13.0,
            beta_acid_composition: 5.0,
            description:
              "Aroma: Strong bittering, heavy, herbal aroma, spicyExamples: Sierra Nevada Porter",
            sub_names: "Chinook",
            beer_style: "Bittering hops for ales"
          },
          {
            id: 55,
            name: "Olympic",
            origin: 8,
            purpose: "bittering",
            alpha_acid_composition: 11.5,
            beta_acid_composition: 5.5,
            description:
              "Olympic is a high alpha hops released by Washington Agricultural Expt Station in 1983.  Heritage is from Brewers Gold and Fuggles.Aroma: Spicy, citrus aroma",
            sub_names: "Brewers Gold",
            beer_style: ""
          },
          {
            id: 56,
            name: "Opal",
            origin: 6,
            purpose: "aroma",
            alpha_acid_composition: 6.5,
            beta_acid_composition: 4.5,
            description:
              "New variety from the hop research center in Hull.Aroma: High aroma hops with hints of spice and subtle citrus.",
            sub_names: "Unknown",
            beer_style: "Aroma hops in continental styles"
          },
          {
            id: 57,
            name: "Orion",
            origin: 6,
            purpose: "dual",
            alpha_acid_composition: 7.3,
            beta_acid_composition: 3.7,
            description:
              "Cross between Perle and an experimental varietyAroma: Pleasant, hoppy",
            sub_names: "Perle",
            beer_style: "Bittering and aroma"
          },
          {
            id: 58,
            name: "Pacific Gem",
            origin: 11,
            purpose: "bittering",
            alpha_acid_composition: 15.0,
            beta_acid_composition: 8.2,
            description:
              "High alpha smoothcone cross developed at DSIR in 1987.Aroma: Pleasant - some blackberry aroma.",
            sub_names: "Bullion",
            beer_style: "Bittering - produces a cask-oak woody flavor."
          },
          {
            id: 59,
            name: "Pacific Jade",
            origin: 11,
            purpose: "bittering",
            alpha_acid_composition: 13.0,
            beta_acid_composition: 7.5,
            description:
              "High alpha bittering hops that delivers a bold herbal infusion of fresh citrus with some black pepper flavor.  Citrus aroma and flavor tempers ales and may be used as a finishing hops. ",
            sub_names: "N/A",
            beer_style: "Ales, lagers"
          },
          {
            id: 60,
            name: "Pacifica",
            origin: 11,
            purpose: "aroma",
            alpha_acid_composition: 5.5,
            beta_acid_composition: 6.0,
            description:
              "Aroma hop developed from Hallertauer Mittelfrueh in New Zealand (1994).  Blend of old and new world taste including Orange marmalade and citrus aroma notes when used in late addition.  Soft finish if used in bittering.  ",
            sub_names: "Chinook, Hallertauer Mittelfrueh",
            beer_style: ""
          },
          {
            id: 61,
            name: "Palisade - 2013-12 - ABC Holiday Party Prize ",
            origin: 8,
            purpose: "dual",
            alpha_acid_composition: 7.1,
            beta_acid_composition: 7.0,
            description:
              "Also called YCR-4, Palisade is an aroma variety bread by Yakima Chief Ranches.  It has both aromatic and moderate bittering properties.  ",
            sub_names: "Willamette",
            beer_style: ""
          },
          {
            id: 62,
            name: "Perle",
            origin: 6,
            purpose: "bittering",
            alpha_acid_composition: 8.0,
            beta_acid_composition: 4.8,
            description:
              "Aroma: Slightly spicy, pleasant aroma, mintyExamples: Sierra Nevada Pale Ale, Pale Bock",
            sub_names: "Chinook, Galena, Northern Brewer",
            beer_style:
              "General purpose bittering for US and German ales, lagers"
          },
          {
            id: 63,
            name: "Phoenix",
            origin: 7,
            purpose: "bittering",
            alpha_acid_composition: 8.0,
            beta_acid_composition: 4.6,
            description:
              "Seedling derived from Wye Yoeman.Aroma: Similar to Wye Challenger hops",
            sub_names: "Challenger, East Kent Golding, Northdown",
            beer_style: "Ales"
          },
          {
            id: 64,
            name: "Pilgrim",
            origin: 7,
            purpose: "bittering",
            alpha_acid_composition: 11.5,
            beta_acid_composition: 4.7,
            description:
              "New variety from Wye College in 2001.  High Selinene content.",
            sub_names: "N/A",
            beer_style: "Bittering"
          },
          {
            id: 65,
            name: "Pilot",
            origin: 7,
            purpose: "bittering",
            alpha_acid_composition: 11.5,
            beta_acid_composition: 3.0,
            description:
              "A very new hops introduced in 2002 by Charles Faram & Co Ltd.  Mild herbal flavor with lemon hints and fresh mowed grass flavor.  Rare.",
            sub_names: "",
            beer_style: "Primarily for bittering in APAs."
          },
          {
            id: 66,
            name: "Pioneer",
            origin: 7,
            purpose: "dual",
            alpha_acid_composition: 9.0,
            beta_acid_composition: 3.8,
            description:
              "Bred from Wye Omega at Wye College in the UKAroma: Mild English hop aroma",
            sub_names: "East Kent Goldings",
            beer_style: "ESB, English Ales"
          },
          {
            id: 67,
            name: "Premiant",
            origin: 4,
            purpose: "dual",
            alpha_acid_composition: 7.5,
            beta_acid_composition: 4.5,
            description:
              "A cross between Czech aroma and bittering varieties.  dual though its aroma is not as strong as some other Czech hops.  Use in beers where a moderate hoppy aroma is needed.  ",
            sub_names: "Saaz",
            beer_style: "Moderate ales, lagers"
          },
          {
            id: 68,
            name: "Pride of Ringwood",
            origin: 1,
            purpose: "bittering",
            alpha_acid_composition: 9.0,
            beta_acid_composition: 5.8,
            description: "Aroma: Moderate citric aroma, clean bittering flavor",
            sub_names: "Cluster, Galena",
            beer_style: "General purpose bittering hops for Australian beers"
          },
          {
            id: 69,
            name: "Progress",
            origin: 7,
            purpose: "aroma",
            alpha_acid_composition: 6.3,
            beta_acid_composition: 2.1,
            description: "Aroma: Similar to Fuggles, aromatic, slightly sweet",
            sub_names: "Fuggles",
            beer_style: "Bittering and aroma in English Ales"
          },
          {
            id: 70,
            name: "Riwaka",
            origin: 11,
            purpose: "aroma",
            alpha_acid_composition: 5.3,
            beta_acid_composition: 4.5,
            description:
              "Formerly called B-Saaz, this was developed from old line Saazer hops in New Zealand.  Aroma: Strong, hoppy. Some grapefruit and citrus character.",
            sub_names: "",
            beer_style: "New world pale ale, regional pilsners"
          },
          {
            id: 71,
            name: "Saaz - 2014-06 Hopunion",
            origin: 4,
            purpose: "aroma",
            alpha_acid_composition: 3.6,
            beta_acid_composition: 4.8,
            description:
              "Aroma: Delicate, mild, clean, somewhat floral -- Noble hopsExamples: Pulsner Urquell",
            sub_names: "Tettnanger, Lublin",
            beer_style: "Pilsners and Bohemian style lagers"
          },
          {
            id: 72,
            name: "Santiam",
            origin: 8,
            purpose: "aroma",
            alpha_acid_composition: 6.0,
            beta_acid_composition: 7.0,
            description:
              "Triploid aroma selection derived from Tettnang and Hallertauer (1997)",
            sub_names: "German Tettnang, Spalt, Spalt Select",
            beer_style: "Lager, US Pale Ale, Pilsner"
          },
          {
            id: 73,
            name: "Saphir",
            origin: 6,
            purpose: "aroma",
            alpha_acid_composition: 3.5,
            beta_acid_composition: 4.6,
            description:
              "A new noble breed as an alternative to Hallertau Mittelfrueh in an attempt to make it more disease resistant and commercially viable.  Similar in character to Hallertau varieties.  ",
            sub_names: "Hallertau Mittelfrueh",
            beer_style: "Pilsners, lagers, Belgian whites."
          },
          {
            id: 74,
            name: "Satus",
            origin: 8,
            purpose: "bittering",
            alpha_acid_composition: 13.3,
            beta_acid_composition: 8.8,
            description:
              "High alpha bittering hops from Yakima that is similar to Galena.  Of recent origin.  ",
            sub_names: "Galena",
            beer_style: ""
          },
          {
            id: 75,
            name: "Select Spalt",
            origin: 6,
            purpose: "aroma",
            alpha_acid_composition: 4.8,
            beta_acid_composition: 3.5,
            description:
              "Bred from Hallertauer Mittelfrueh and Spalt in Germany.  Spalt character.Aroma: Very fine, spalt aroma",
            sub_names: "Spalter, Saaz, Tettnang",
            beer_style: "Lager, Pilsner, Noble aroma hop substitute"
          },
          {
            id: 76,
            name: "Simcoe - 2013-08 - Freshops",
            origin: 8,
            purpose: "bittering",
            alpha_acid_composition: 14.1,
            beta_acid_composition: 4.5,
            description:
              "High alpha bittering hops with good aroma characteristics.Aroma: Citrus and pine-like aroma",
            sub_names: "N/A",
            beer_style: "IPAs"
          },
          {
            id: 77,
            name: "Sladek",
            origin: 4,
            purpose: "aroma",
            alpha_acid_composition: 5.0,
            beta_acid_composition: 7.5,
            description:
              "Hybrid variety of Saaz origin with noble hoppy taste and aroma.  Generally recommended for middle-hopping about 20 min before end of boil.  Not a replacement for Saaz, but complimentary in Lagers.  ",
            sub_names: "Saaz",
            beer_style: "Lager"
          },
          {
            id: 78,
            name: "Sorachi Ace",
            origin: 13,
            purpose: "bittering",
            alpha_acid_composition: 12.0,
            beta_acid_composition: 6.0,
            description:
              "Developed by Sapporo Breweries and used in their beers - has a Brewers gold and Saaz heritage.  Reported to be lemony in flavor and aroma.  ",
            sub_names: "Admiral, Cascade",
            beer_style:
              "Saison, IPA or other beer where lemon/citrus is desirable."
          },
          {
            id: 79,
            name: "Southern Cross",
            origin: 11,
            purpose: "dual",
            alpha_acid_composition: 13.0,
            beta_acid_composition: 6.2,
            description:
              'dual with "European" flavor - from DSIR in 1994Aroma: Spicy, lemony, slight pine and wood flavors',
            sub_names: "N/A",
            beer_style: "European flavor bittering/aroma"
          },
          {
            id: 80,
            name: "Spalter",
            origin: 6,
            purpose: "aroma",
            alpha_acid_composition: 4.5,
            beta_acid_composition: 4.0,
            description:
              "Aroma: Mild, pleasant, slight spiceExamples: Dusseldorf Altbiers",
            sub_names: "Saaz, Tettnang",
            beer_style:
              "Traditional German bittering and aroma hops, Altbiers, Lagers"
          },
          {
            id: 81,
            name: "Sterling",
            origin: 8,
            purpose: "dual",
            alpha_acid_composition: 7.5,
            beta_acid_composition: 5.0,
            description:
              "Flavor is a cross between Saaz and Mt HoodAroma: Herbal, spicy, some floral and citrus hints",
            sub_names: "Saaz, Polish Lublin",
            beer_style: "Lagers, Ales, Pilsners"
          },
          {
            id: 82,
            name: "Sticklebract",
            origin: 11,
            purpose: "dual",
            alpha_acid_composition: 13.5,
            beta_acid_composition: 8.0,
            description:
              "High alpha hops from DSIR research first released in 1972.  Some of the same qualities as Northern Brewer Aroma: Pine-like with a hint of citrus",
            sub_names: "Northern Brewer",
            beer_style: "dual"
          },
          {
            id: 83,
            name: "Strisslespalt",
            origin: 14,
            purpose: "aroma",
            alpha_acid_composition: 4.0,
            beta_acid_composition: 3.8,
            description:
              "Aroma hops used widely in the Alsace area of France.Aroma: Medium intensity, pleasant, hoppy",
            sub_names: "Mt Hood, Crystal, Hallertauer Hersbruck",
            beer_style: "Pilsner, lager, wheat"
          },
          {
            id: 84,
            name: "Styrian Goldings",
            origin: 10,
            purpose: "aroma",
            alpha_acid_composition: 5.4,
            beta_acid_composition: 2.9,
            description:
              "A seedless version of Fuggles grown in SloveniaAroma: Mild, soft, grassy, floral aroma. Similar to Fuggles.",
            sub_names: "Fuggles, Williamette",
            beer_style:
              "Bittering, finishing for a wide variety of European Beers. Popular in Europe and the United Kingdom"
          },
          {
            id: 85,
            name: "Summit",
            origin: 8,
            purpose: "bittering",
            alpha_acid_composition: 17.0,
            beta_acid_composition: 5.0,
            description:
              "High alpha variety bred by American Dwarf Hop Assoc.  Can be grown commercially on a low trellis.  Aroma: Strong citrus, grapefruit notes.",
            sub_names: "Warrior, Millenium, Columbus, Tomahawk, Zeus",
            beer_style: ""
          },
          {
            id: 86,
            name: "Sun",
            origin: 8,
            purpose: "bittering",
            alpha_acid_composition: 14.0,
            beta_acid_composition: 5.5,
            description:
              "A very high alpha bittering hops from Yakima Valley, WashingtonAroma: Pleasant, hoppy",
            sub_names: "Other very high alpha US hops",
            beer_style: "Bittering (intense)"
          },
          {
            id: 87,
            name: "Super Alpha",
            origin: 11,
            purpose: "bittering",
            alpha_acid_composition: 13.0,
            beta_acid_composition: 8.0,
            description:
              "High alpha hops released in 1976 by DSIR. European in character - clean crisp flavor and resin aroma.Aroma: Pleasant, resin like aroma",
            sub_names: "N/A",
            beer_style: "European Styles, General purpose bittering"
          },
          {
            id: 88,
            name: "Super Galena",
            origin: 8,
            purpose: "bittering",
            alpha_acid_composition: 14.5,
            beta_acid_composition: 9.0,
            description:
              "Super high alpha hops from Hopsteiner breeding program released in 2006.  High alpha and beta content - comparable to Galena in bitterness and aroma profile.  ",
            sub_names: "Galena",
            beer_style: "Primarily for bitterness."
          },
          {
            id: 89,
            name: "Super Pride",
            origin: 1,
            purpose: "bittering",
            alpha_acid_composition: 14.3,
            beta_acid_composition: 6.7,
            description:
              "A high alpha variation of the Pride of Ringwood hop variety.  Features mild aromas, higher alpha content and low cohumulone levels.  ",
            sub_names: "Pride of Ringwood",
            beer_style: "Primarily for bittering."
          },
          {
            id: 90,
            name: "Target",
            origin: 7,
            purpose: "bittering",
            alpha_acid_composition: 11.0,
            beta_acid_composition: 5.0,
            description: "Aroma: Robust aroma and flavor",
            sub_names: "East Kent Goldings",
            beer_style: "English ales and lagers"
          },
          {
            id: 91,
            name: "Tettnang - 2013-11 - Knickerbocker Prize",
            origin: 6,
            purpose: "aroma",
            alpha_acid_composition: 3.8,
            beta_acid_composition: 3.5,
            description:
              "Aroma: Noble, mild, fine, slightly spicyExamples: Sam Adams Octoberfest, Anderson Valley ESB",
            sub_names: "Saaz, Spalt",
            beer_style: "German ales, lagers and wheat beer"
          },
          {
            id: 92,
            name: "Tillicum",
            origin: 8,
            purpose: "bittering",
            alpha_acid_composition: 13.3,
            beta_acid_composition: 9.9,
            description:
              "High alpha and high beta hops developed though Haas breeding program and released in 1995.  Daughter variety of Galena and related to Chelan - so similar to both. ",
            sub_names: "Galena, Chelan",
            beer_style: ""
          },
          {
            id: 93,
            name: "Tomahawk",
            origin: 8,
            purpose: "bittering",
            alpha_acid_composition: 15.5,
            beta_acid_composition: 4.5,
            description:
              "Part of the Columbus/Tomahak/Zeus (CTZ) group of super high alpha hops.  Together these make up 1/4 of US hop acreage.  ",
            sub_names: "Tomahawk, Zeus, Nugget, Galena, Chinook",
            beer_style:
              "High alpha hops used primarily for commercial bittering."
          },
          {
            id: 94,
            name: "Topaz",
            origin: 1,
            purpose: "bittering",
            alpha_acid_composition: 17.0,
            beta_acid_composition: 6.5,
            description:
              "Very high alpha hop variety from Australia.  Used for commercial production primarily for its high alpha acid content and high bitterness.",
            sub_names: "",
            beer_style: ""
          },
          {
            id: 95,
            name: "Tradition",
            origin: 6,
            purpose: "bittering",
            alpha_acid_composition: 6.0,
            beta_acid_composition: 4.5,
            description:
              "Close descendant of Hallertauer Mittelfrueh bred for high yield.Aroma: Fine - similar to Hallertauer Mittelfrueh",
            sub_names: "Hallertauer Mittelfrueh, Liberty, Ultra",
            beer_style: "Lager, Pilsner, Bock, some Weizens"
          },
          {
            id: 96,
            name: "Ultra",
            origin: 8,
            purpose: "aroma",
            alpha_acid_composition: 3.0,
            beta_acid_composition: 3.8,
            description:
              "Triploid seedling of the German Hallertauer VarietyAroma: Good to outstanding - some Saaz like qualities",
            sub_names: "Liberty, Hallertauer, Tradition, Saaz",
            beer_style: "Lager, Pilsner, wheat, finishing hops in ales"
          },
          {
            id: 97,
            name: "Vanguard",
            origin: 8,
            purpose: "aroma",
            alpha_acid_composition: 5.5,
            beta_acid_composition: 6.0,
            description:
              "Diploid seedling made in 1982, released in 1997. Hallertau Mitterfrueh parentage.Aroma: Strong aromatic notes",
            sub_names: "Hallertauer Mittelfrueh",
            beer_style: "European lagers, ales"
          },
          {
            id: 98,
            name: "Victoria",
            origin: 1,
            purpose: "bittering",
            alpha_acid_composition: 13.0,
            beta_acid_composition: 6.3,
            description:
              "Hi alpha hops grown in Victoria, Australia.  It was created in 1976 and entered commercial production in the 1990s.",
            sub_names: "",
            beer_style: "Primarily for bittering due to high alpha content."
          },
          {
            id: 99,
            name: "Warrior",
            origin: 8,
            purpose: "dual",
            alpha_acid_composition: 15.0,
            beta_acid_composition: 4.8,
            description:
              "High alpha hops from Yakima Chief Ranches. Also called YCR-5.  Mild aroma and low cohumulone content - primarily for bittering.Aroma: Neutral, clean, mild",
            sub_names: "Nugget, Columbus, Magnum",
            beer_style: "Ales, stouts"
          },
          {
            id: 100,
            name: "Whitbread Golding Variety (WGV)",
            origin: 7,
            purpose: "aroma",
            alpha_acid_composition: 6.0,
            beta_acid_composition: 2.5,
            description:
              "Derived in England in 1911 from Bates Brewer. Some Golding characteristics, but lacking the full Goldings aroma.Aroma: Pleasant, hoppy, slightly intense",
            sub_names: "East Kent Goldings, Progress",
            beer_style: "Ales"
          },
          {
            id: 101,
            name: "Willamette - 2014-06 Hopunion",
            origin: 8,
            purpose: "aroma",
            alpha_acid_composition: 5.3,
            beta_acid_composition: 3.7,
            description:
              "Aroma: Mild, grassy, floral, slightly spicyExamples: Sierra Nevada Porter, Ballard Bitter",
            sub_names: "Fuggles, East Kent Goldings",
            beer_style: "Finishing American and British Ales"
          },
          {
            id: 102,
            name: "Zeus",
            origin: 8,
            purpose: "bittering",
            alpha_acid_composition: 14.0,
            beta_acid_composition: 5.0,
            description:
              "Super high alpha bittering hops developed in the Yakima Valley, WAAroma: Aromatic, pleasant",
            sub_names: "Other high alpha hops",
            beer_style: "Bittering, intense aroma"
          },
          {
            id: 103,
            name: "Aged Hops (2008) - 2013-08 - Freshops",
            origin: 0,
            purpose: "bittering",
            alpha_acid_composition: 1.5,
            beta_acid_composition: 1.0,
            description:
              "Lambic styles utilize older aroma types. Willamette is an English Fuggle hybrid, so it will provide mild bitterness and preservation to lambic beers.",
            sub_names: "",
            beer_style: ""
          },
          {
            id: 104,
            name: "Legacy",
            origin: 8,
            purpose: "bittering",
            alpha_acid_composition: 7.3,
            beta_acid_composition: 2.0,
            description: "",
            sub_names: "",
            beer_style: ""
          },
          {
            id: 105,
            name: "Simcoe - 2014-08 Hopunion",
            origin: 8,
            purpose: "bittering",
            alpha_acid_composition: 12.7,
            beta_acid_composition: 4.0,
            description:
              "High alpha bittering hops with good aroma characteristics.Aroma: Citrus and pine-like aroma",
            sub_names: "N/A",
            beer_style: "IPAs"
          },
          {
            id: 106,
            name: "Comet",
            origin: 8,
            purpose: "bittering",
            alpha_acid_composition: 10.9,
            beta_acid_composition: 4.0,
            description: "Very bitter hops - use sparingly with other hops",
            sub_names: "N/A",
            beer_style: "Bittering only"
          },
          {
            id: 107,
            name: "Tettnang",
            origin: 6,
            purpose: "aroma",
            alpha_acid_composition: 4.5,
            beta_acid_composition: 3.5,
            description:
              "Aroma: Noble, mild, fine, slightly spicyExamples: Sam Adams Octoberfest, Anderson Valley ESB",
            sub_names: "Saaz, Spalt",
            beer_style: "German ales, lagers and wheat beer"
          },
          {
            id: 108,
            name: "Palisade",
            origin: 8,
            purpose: "dual",
            alpha_acid_composition: 7.5,
            beta_acid_composition: 7.0,
            description:
              "Also called YCR-4, Palisade is an aroma variety bread by Yakima Chief Ranches.  It has both aromatic and moderate bittering properties.  ",
            sub_names: "Willamette",
            beer_style: ""
          },
          {
            id: 109,
            name: "Legacy - 2013-08",
            origin: 8,
            purpose: "bittering",
            alpha_acid_composition: 7.2,
            beta_acid_composition: 2.0,
            description: "Stored in plastic zip-lock bags w/o O2 removal",
            sub_names: "",
            beer_style: ""
          },
          {
            id: 110,
            name: "Goldings, East Kent",
            origin: 7,
            purpose: "aroma",
            alpha_acid_composition: 5.0,
            beta_acid_composition: 3.5,
            description:
              "Aroma: Floral, aromatic, earthy, slightly sweet spicy flavorExamples: Bass Pale Ale, Fullers ESB, Samual Smiths Pale Ale",
            sub_names: "Fuggles, BC Goldings",
            beer_style:
              "General purpose hops for bittering/finishing all British Ales"
          },
          {
            id: 111,
            name: "Fuggles - 2013-08 - HE",
            origin: 7,
            purpose: "aroma",
            alpha_acid_composition: 5.3,
            beta_acid_composition: 2.0,
            description:
              "Aroma: Mild, soft, grassy, floral aromaSubstitute: East Kent Goldings, WilliametteExamples: Samuel Smiths Pale Ale, Old Peculiar, Thomas Hardys Ale",
            sub_names: "",
            beer_style:
              "General purpose bittering/aroma for English Ales, Dark Lagers"
          },
          {
            id: 112,
            name: "Northern Brewer - 2013-08 - Hops Direct",
            origin: 6,
            purpose: "dual",
            alpha_acid_composition: 10.1,
            beta_acid_composition: 4.0,
            description:
              "Also called Hallertauer Northern BrewersAroma: Fine, dry, clean bittering hop.  Unique flavor.Examples: Anchor Steam, Old Peculiar,",
            sub_names: "Hallertauer Mittelfrueh, Hallertauer",
            beer_style:
              "Bittering and finishing both ales and lagers of all kinds"
          },
          {
            id: 113,
            name: "Magnum - 2013-08 - Hops Direct",
            origin: 6,
            purpose: "bittering",
            alpha_acid_composition: 12.2,
            beta_acid_composition: 6.5,
            description:
              "German Hallertauer hybrid, widely used in GermanyAroma: Good aroma and stable spicy flavor",
            sub_names: "N/A",
            beer_style: "German ales and lagers"
          },
          {
            id: 114,
            name: "Mandarina - 5/1/2014 from Aaron",
            origin: 0,
            purpose: "aroma",
            alpha_acid_composition: 7.2,
            beta_acid_composition: 2.0,
            description: "",
            sub_names: "",
            beer_style: ""
          },
          {
            id: 115,
            name: "Simcoe",
            origin: 8,
            purpose: "bittering",
            alpha_acid_composition: 13.0,
            beta_acid_composition: 4.5,
            description:
              "High alpha bittering hops with good aroma characteristics.Aroma: Citrus and pine-like aroma",
            sub_names: "N/A",
            beer_style: "IPAs"
          },
          {
            id: 116,
            name: "Cascade",
            origin: 8,
            purpose: "dual",
            alpha_acid_composition: 5.5,
            beta_acid_composition: 6.0,
            description:
              "A hops with Northern Brewers HeritageAroma: Strong spicy, floral, grapefruit characterExamples: Sierra Nevada Pale Ale, Anchor Liberty Ale",
            sub_names: "Centennial",
            beer_style: "American ales and lagers"
          },
          {
            id: 117,
            name: "Saaz",
            origin: 4,
            purpose: "aroma",
            alpha_acid_composition: 4.0,
            beta_acid_composition: 3.5,
            description:
              "Aroma: Delicate, mild, clean, somewhat floral -- Noble hopsExamples: Pilsner Urquell",
            sub_names: "Tettnanger, Lublin",
            beer_style: "Pilsners and Bohemian style lagers"
          },
          {
            id: 118,
            name: "Willamette",
            origin: 8,
            purpose: "aroma",
            alpha_acid_composition: 5.5,
            beta_acid_composition: 3.5,
            description:
              "Aroma: Mild, grassy, floral, slightly spicyExamples: Sierra Nevada Porter, Ballard Bitter",
            sub_names: "Fuggles, East Kent Goldings",
            beer_style: "Finishing American and British Ales"
          },
          {
            id: 119,
            name: "CTZ 2013",
            origin: 8,
            purpose: "bittering",
            alpha_acid_composition: 13.1,
            beta_acid_composition: 4.0,
            description: "",
            sub_names: "",
            beer_style: ""
          },
          {
            id: 120,
            name: "Crystal",
            origin: 8,
            purpose: "aroma",
            alpha_acid_composition: 3.5,
            beta_acid_composition: 5.2,
            description: "Aroma: Clean, mild, pleasant and slightly spicy",
            sub_names: "Hallertauer, Mount Liberty",
            beer_style: "Aroma and finishing hops for Lagers"
          },
          {
            id: 121,
            name: "Zagrava",
            origin: 9,
            purpose: "dual",
            alpha_acid_composition: 8,
            beta_acid_composition: 10,
            description:
              "An aroma variety with the big essential oil content, placed between Tradition and Spalter Select. Common known as dual purpose hop. It can be used for both bittering and flavoring beers. Aroma: spicy-floral aroma with herbal and fruits notes.",
            sub_names: "Slavianka, Tettnanger, Saaz",
            beer_style: "Lager"
          },
          {
            id: 122,
            name: "Slavianka",
            origin: 9,
            purpose: "bittering",
            alpha_acid_composition: 5,
            beta_acid_composition: 10,
            description:
              "A hop variety with high alpha acid content. Beer made of this hop has fine hop aroma and balanced bitterness. Aroma: herbal and floral with nectar notes.",
            sub_names: "Tettnanger, Saaz",
            beer_style: "Lager, Wheat"
          },
          {
            id: 123,
            name: "Zlato Polessia",
            origin: 9,
            purpose: "bittering",
            alpha_acid_composition: 6.5,
            beta_acid_composition: 5,
            description:
              "A  hop with very soft and fresh aroma, common used in traditional beer. Aroma: sweet herbal and fruits.",
            sub_names: "Tettnanger, Saaz, Lubelski, Slavianka",
            beer_style: "Lager, Pilsner, Wheat"
          }
        ])
      ]).catch(err => console.log("Error seeding hops", err));
    });
};
