exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("yeast")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("yeast").insert([
        {
          id: 1,
          name: "Denny's Favorite",
          lab: "Wyeast Labs",
          code: "1450",
          beer_type: "Ale",
          flocculation: "low",
          temperature: "16.0 - 21.0",
          description:
            "This terrific all-round yeast can be used for almost any beer style, and is a mainstay of one of our local homebrewers, Mr. Denny Conn. It is unique in that it produces a big mouthfeel and accentuates the malt, caramel, or fruit character of a beer without being sweet or under-attenuated.  [American Ambers, Browns, IPAs, Scotch Ale, Brown Porter, Cream Ale, Fruit Beer, Red Ale]",
          type: "liquid"
        },
        {
          id: 2,
          name: "West Yorkshire Ale",
          lab: "Wyeast Labs",
          code: "1469",
          beer_type: "Ale",
          flocculation: "high",
          temperature: "18.0 - 22.0",
          description:
            "This strain produces ales with a full chewy malt flavor and character, but finishes dry, producing famously balanced beers. Expect moderate nutty and stone-fruit esters. Best used for the production of cask-conditioned bitters, ESB and mild ales. Reliably flocculent, producing bright beer without filtration. [English IPA, Bitters, Stouts, Browns]",
          type: "liquid"
        },
        {
          id: 3,
          name: "Biere de Garde",
          lab: "Wyeast Labs",
          code: "3725",
          beer_type: "Ale",
          flocculation: "low",
          temperature: "21.0 - 29.0",
          description:
            "Low to moderate ester production with subtle spiciness. Malty and full on the palate with initial sweetness. Finishes dry and slightly tart. Ferments well with no sluggishness. [Biere de Garde, Saison, Belgian Blonde, Belgian Pale Ale, Belgian Golden Strong]",
          type: "liquid"
        },
        {
          id: 4,
          name: "Belgian Dark Ale",
          lab: "Wyeast Labs",
          code: "3822",
          beer_type: "Ale",
          flocculation: "medium",
          temperature: "18.0 - 27.0",
          description:
            "This unique Belgian ale yeast is a high acid producer with balanced ester and phenol production allowing a good expression of malt profile, especially the strong flavors of darker malts and sugars. High alcohol tolerance. Spicy, tart, and dry on the palate with a very complex finish. [Belgian Strong Dark and Golden Ales, Belgian Quadrupel, Oud Bruin/Flanders Brown, Fruit Beers, Belgian Specialty Beers]",
          type: "liquid"
        },
        {
          id: 5,
          name: "Scotch Whisky Yeast",
          lab: "White Labs",
          code: "WLP045",
          beer_type: "Ale",
          flocculation: "medium",
          temperature: "22.0 - 25.0",
          description:
            "A strain that was widely used for Scotch Whisky production from the early 1950s, producing a complex array of ester compounds and fusel oils, as well as some spicy, clove character. Suitable for Scotch Whisky or American-style Whiskey. Used in high-gravity beers. [Scotch Whiskey Yeast]",
          type: "liquid"
        },
        {
          id: 6,
          name: "Tennessee Whisky Yeast",
          lab: "White Labs",
          code: "WLP050",
          beer_type: "Ale",
          flocculation: "medium",
          temperature: "24.0 - 26.0",
          description:
            "Suitable for American-style whiskey and bourbon. This yeast is famous for creating rich, smooth flavors. Clean and dry fermenting yeast. Will tolerate high alcohol concentrations (15%), and ester production is low. Also popular in high-gravity beers. [American Whisky]",
          type: "liquid"
        },
        {
          id: 7,
          name: "American Whisky Yeast",
          lab: "White Labs",
          code: "WLP065",
          beer_type: "Ale",
          flocculation: "medium",
          temperature: "24.0 - 28.0",
          description:
            "Yeast strain that produces low ester profile and moderate fusel oils. Temperature and alcohol tolerant and suitable for American-style whiskey using barley or corn base. Also used in high-gravity beers. [Bourbon or American Whisky]",
          type: "liquid"
        },
        {
          id: 8,
          name: "Bourbon Whisky Yeast",
          lab: "White Labs",
          code: "WLP070",
          beer_type: "Ale",
          flocculation: "medium",
          temperature: "22.0 - 25.0",
          description:
            "From a tradtional distillery in the heart of Bourbon country, this strain produces a carmel, malty character with balanced ester profile. Suitable for Bourbon or other American Whiskey with barley, rye, or corn as the base grain. Used in high-gravity beers. [Bourbon Whisky]",
          type: "liquid"
        },
        {
          id: 9,
          name: "French Ale",
          lab: "White Labs",
          code: "WLP072",
          beer_type: "Ale",
          flocculation: "high",
          temperature: "17.0 - 23.0",
          description:
            "Clean strain that complements malt flavor. Low to moderate esters, when fermentation temperature is below 70F.  Moderate plus ester character over 70F.  Low diacetyl production. Good yeast strain for Biere de Garde, blond, amber, brown ales, and specialty beers. [Biere de Garde, Blonde, Brown Ales and Specialty Beers]",
          type: "liquid"
        },
        {
          id: 10,
          name: "Old Sonoma",
          lab: "White Labs",
          code: "WLP076",
          beer_type: "Ale",
          flocculation: "medium",
          temperature: "19.0 - 21.0",
          description:
            "Yeast from an historic brewery in Northern California, this strain was embraced by the early pioneers of craft beer in America and continues to be a great choice for those seeking to use a traditional British-style yeast. A neutral and versatile strain, it is a great choice for pale ales, porters, and stouts. [American Ales, Porters, Stouts]",
          type: "liquid"
        },
        {
          id: 11,
          name: "Neutral Grain Yeast",
          lab: "White Labs",
          code: "WLP078",
          beer_type: "Ale",
          flocculation: "medium",
          temperature: "24.0 - 29.0",
          description:
            "Marked by a clean, fast fermentation, this strain is ideal for any neutral grain spirit. Alcohol and temperature tolerant. Used in high-gravity beers. [High gravity beers]",
          type: "liquid"
        },
        {
          id: 12,
          name: "English Ale Blend",
          lab: "White Labs",
          code: "WLP085",
          beer_type: "Ale",
          flocculation: "medium",
          temperature: "20.0 - 22.0",
          description:
            "A blend of British ale yeast strains, designed to add complexity to your ale. Moderate fruitiness and mineral-like, with little to no sulfur. Drier than WLP002 and WLP005, but with similar flocculation properties. Good yeast blend for English Pale Ale, Bitter, Porter, Stout, and India Pale Ale. [English Pale Ale, Stouts, Bitters, Porters and India Pale Ale]",
          type: "liquid"
        },
        {
          id: 13,
          name: "San Diego Super Yeast",
          lab: "White Labs",
          code: "WLP090",
          beer_type: "Ale",
          flocculation: "high",
          temperature: "18.0 - 20.0",
          description:
            "A super clean, super-fast fermenting strain. A low ester-producing strain that results in a balanced, neutral flavor and aroma profile. Alcohol-tolerant and very versatile for a wide variety of styles. Similar to California Ale Yeast WLP001 but it generally ferments faster. [A wide variety of styles requiring clean, fast fermentation and finish]",
          type: "liquid"
        },
        {
          id: 14,
          name: "Belgian Saison III Yeast",
          lab: "White Labs",
          code: "WLP585",
          beer_type: "Ale",
          flocculation: "medium",
          temperature: "20.0 - 24.0",
          description:
            "Produces beer with a high fruit ester characteristic, as well as some slight tartness. Finishes slightly malty, which balances out the esters. Also produces low levels of clovey phenolics. Great yeast choice for a summer Saison that is light and easy-drinking. [Saison, Summer Ales, Farmhouse Ales]",
          type: "liquid"
        },
        {
          id: 15,
          name: "Brettanomyces Bruxellensis Trois",
          lab: "White Labs",
          code: "WLP644",
          beer_type: "Ale",
          flocculation: "low",
          temperature: "21.0 - 29.0",
          description:
            "This Belgian strain, used traditionally for 100% Brettanomyces fermentations, produces a slightly tart beer with delicate characteristics of mango and pineapple. Can also be used to produce effervescence when bottle-conditioning. [Sour beers, Belgian Sour Variations]",
          type: "liquid"
        },
        {
          id: 16,
          name: "Flemish Ale Blend",
          lab: "White Labs",
          code: "WLP665",
          beer_type: "Ale",
          flocculation: "low",
          temperature: "20.0 - 27.0",
          description:
            "Blended culture used to produce the classic beer styles of the West Flanders region of Belgium . A proprietary blend of Saccharomyces yeasts, Brettanomyces, Lactobacillus, and Pediococcus, this culture creates a more complex, dark stone fruit characteristic than WLP 655 Belgian Sour Mix [Flemish Ale, Sour Ales]",
          type: "liquid"
        },
        {
          id: 17,
          name: "California Pinot Noir Yeast",
          lab: "White Labs",
          code: "WLP707",
          beer_type: "Cider",
          flocculation: "low",
          temperature: "21.0 - 27.0",
          description:
            "Isolated from Pinot Noir grapes by White Labs in Davis, CA. This strain produces fruity and complex aromas, and is an ideal choice for hardy red wine varieties, as well as aromatic white wines such as Chardonnay. This strain is reliable for difficult fermentations. [Pinot Noir Wine Yeast]",
          type: "liquid"
        },
        {
          id: 18,
          name: "Sake #9 Yeast",
          lab: "White Labs",
          code: "WLP709",
          beer_type: "Cider",
          flocculation: "low",
          temperature: "17.0 - 20.0",
          description:
            "For use in rice-based fermentations. Traditional strain used in Ginjo-shu production because of the yeast's development of high fragrance components. Also a fairly strong fermenter, but producing a foamless fermentation. [Sake and rice based wines]",
          type: "liquid"
        },
        {
          id: 19,
          name: "Munich Helles Yeast",
          lab: "White Labs",
          code: "WLP860",
          beer_type: "Lager",
          flocculation: "medium",
          temperature: "9.0 - 11.0",
          description:
            "This yeast helps to produce a malty, but balanced traditional Munich-style lager. Clean and strong fermenter, it's great for a variety of lager styles ranging from Helles to Rauchbier. [A variety of lager styles including Helles, Rauchbier and Munich Lagers]",
          type: "liquid"
        },
        {
          id: 20,
          name: "Whitbread Ale Yeast",
          lab: "White Labs",
          code: "WLP017",
          beer_type: "Ale",
          flocculation: "high",
          temperature: "19.0 - 21.0",
          description:
            "Traditional mixed yeast culture. British style character, slightly fruity, with a hint of sulfur production. This yeast can be used for many different beer styles. The most traditional choices would be English style ales including milds, bitters, porters, and English style stouts. North American style ales will also benefit from fermentation with WLP017. The beer will clear easily. [English style ales, milds, bitters, porters, and English ales as well as some North Amreican ales]",
          type: "liquid"
        },
        {
          id: 21,
          name: "Bavarian Wheat Yeast",
          lab: "Mangrove Jack's",
          code: "M20",
          beer_type: "Hefeweizen",
          flocculation: "medium",
          temperature: "15.0 - 30.0",
          description:
            "A classic top-fermenting yeast suited for brewing a range of German Weizens as well as Belgian Witbier. It has a very low flocculation rate and a clean, yeasty aroma which makes it ideal for beers that are traditionally served cloudy. This yeast creates beer with a low to completely dry level of sweetness, medium body with a silky mouth feel, and a delicious banana and spice aroma. [Weizen, Witbier, Hefeweizen]",
          type: "dried"
        },
        {
          id: 22,
          name: "British Ale Yeast",
          lab: "Mangrove Jack's",
          code: "M07",
          beer_type: "Ale",
          flocculation: "low",
          temperature: "14.0 - 22.0",
          description:
            "A neutral top-fermenting strain especially suited for brewing silky smooth light ales with a neutral yeast aroma and flavor contribution. This strain also works well for stronger ales where a soft and balanced mouth feel is desired and where the nutty, spicy and earthy hop and malt characteristics should be enhanced. This yeast strain is highly flocculent and not prone to autolysis, making it an excellent choice for both cask and bottle conditioned beer.  Low in esters for an English yeast. [Wide variety of British Ales]",
          type: "dried"
        },
        {
          id: 23,
          name: "US West Coast Yeast",
          lab: "Mangrove Jack's",
          code: "M44",
          beer_type: "Ale",
          flocculation: "medium",
          temperature: "15.0 - 23.0",
          description:
            "With the craft beer movement being lead by the USA, there has been a demand for a yeast strain which emphasizes the expressive flavors of the unique ingredients used.\nU.S. West Coast Yeast is a high attenuating, top-fermenting strain that ferments with almost completely neutral attributes across a wide range of wort strengths and temperature ranges. It produces a moderately high acidity which allows the tangy citrus hop aromas to really punch through, while also enhancing toasted and dark malt characters. If you plan to use a lot of expensive flavourful hops as the prominent feature of your beer, use this yeast. [American ales, high alcohol beers]",
          type: "dried"
        },
        {
          id: 24,
          name: "Burton Union Yeast",
          lab: "Mangrove Jack's",
          code: "M79",
          beer_type: "Ale",
          flocculation: "medium",
          temperature: "17.0 - 23.0",
          description:
            "Famous the world over for its crisp, dry and uniquely malty and hoppy ales, this strain has been isolated and developed especially for the home and craft brewer from a commercial brewery in the heartland of British Brewing. Burton Union Yeast is a gentle but rapid fermenter that generates light and delicate ripe pear esters and does not strip away light malt character or body. Moderate acidity balances the silky smooth texture of beers fermented with this strain. When hops or malt aromas are stronger, the yeast contribution will be neutral. When used in lighter quality malt bases, the hops and esters are able to\nshine. Beers made with this yeast are quick to condition, giving you great beer in as little as 3 weeks. [English Beer Styles]",
          type: "dried"
        },
        {
          id: 25,
          name: "Bohemian Lager Yeast",
          lab: "Mangrove Jack's",
          code: "M84",
          beer_type: "Lager",
          flocculation: "medium",
          temperature: "10.0 - 15.0",
          description:
            "Bohemian Lager is a classic bottom-fermenting, continental lager strain that produces elegant, well balanced beers. Bohemian Lager Yeast is characterized by its dry and clean palate, typical of traditional Czech brewing. This strain confers smooth, subtle yeast characteristics with muted fruit notes, resulting in refreshingly crisp lagers with expressive hop character. While rich and chewy, the beers fermented with this strain will not be sweet, but may have an elusive sweet malt flavor in the aftertaste. Lagering periods as short as 4 weeks may produce acceptable beer, but allowing beer to lager 6-8 weeks will result in beer that is richer, smoother, with a more refined aroma and flavor. [European lagers and Pilsner styles]",
          type: "dried"
        },
        {
          id: 26,
          name: "Belgian Ale Yeast",
          lab: "Mangrove Jack's",
          code: "M27",
          beer_type: "Ale",
          flocculation: "medium",
          temperature: "21.0 - 32.0",
          description:
            "With a myriad of flavours and aromas embraced by master brewers all over Belgium, this strain has been specially developed to bring the best of these flavors to the home or craft brewer. Belgian ale yeast is an exceptional top-fermenting yeast strain creating distinctive beers with spicy, fruity and peppery notes. Ideal for fermentation of Belgian Saison or farmhouse style beers, but also suitable for other Belgian styles. This yeast is highly attenuative and has a high ethanol tolerance that makes it ideal for creating most Belgian beer styles, including Quadrupel styles of up to 14% ABV. At higher alcohol levels fermentation may take longer but the strain is robust enough to deal with almost anything. This strain successfully brings the sophistication of classic Belgian ale production to the home and small brewery. [Belgian Ales]",
          type: "dried"
        },
        {
          id: 27,
          name: "Newcastle Dark Ale Yeast",
          lab: "Mangrove Jack's",
          code: "M03",
          beer_type: "Ale",
          flocculation: "medium",
          temperature: "18.0 - 22.0",
          description:
            "Newcastle Dark Ale Yeast successfully brings classic cask ale production into the homebrew or craft setting. This is a top-fermentation strain well suited for fermenting British ales, particularly dark and full bodied ales, mild brown ales and Scottish Heavy ales. Selected to not over attenuate, this strain will stop short of the low end gravities exhibited by other yeast strains. Dark fruity esters are pronounced when fermented at the appropriate temperature. Care should be taken to adjust hop bitterness to ensures it suits the ester character and complements the fuller bodied finish. [Full bodied British Ale styles]",
          type: "dried"
        },
        {
          id: 28,
          name: "Workhorse Beer Yeast",
          lab: "Mangrove Jack's",
          code: "M10",
          beer_type: "Ale",
          flocculation: "medium",
          temperature: "15.0 - 32.0",
          description:
            "Workhorse Beer yeast is a true all rounder, suitable for a myriad of beer styles at extremely high gravities and different brewing temperatures. From Baltic porter to ambient temperature fermented lagers, this top-fermenting strain has such a clean\nflavor and aroma profile that it is suitable for almost every application. It is a robust strain with rapid and reliable fermentation performance, good attenuation properties, and ideally suited to making cask or bottle conditioned beers. This highly versatile strain also has very good ethanol tolerance up to 9% ABV and excellent temperature tolerance up to 90F (32C). [Suitable for many lagers and ales - including high gravity beers]",
          type: "dried"
        },
        {
          id: 29,
          name: "Cider Yeast",
          lab: "Mangrove Jack's",
          code: "M02",
          beer_type: "Champagne",
          flocculation: "high",
          temperature: "12.0 - 28.0",
          description:
            "Mangrove Jack's Cider Yeast is a high ester-producing strain, imparting wonderful flavor depth, revealing the full fruit potential of the juice. Ciders fermented using this strain are exceptionally crisp, flavorsome and refreshing in taste. This highly robust yeast has good fructose assimilation and is capable of fermenting under challenging conditions and over a wide temperature range. Mangrove Jack's Cider Yeast is a highly flocculent strain, suitable for all styles of cider. Trace nutrients have been blended with the yeast in Mangrove Jack's Cider Yeast sachets for optimum yeast health, fermentation performance and cider quality. [All cider types]",
          type: "dried"
        }
      ]);
    });
};
