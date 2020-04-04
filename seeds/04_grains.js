exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("grains")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("grains").insert([
        {
          id: 1,
          name: "Amber Dry Extract",
          origin: 8,
          yield: 95.0,
          color: 12.5,
          protein: 11.7,
          mash: 1,
          description:
            "Amber colored dry malt extract, for general purpose use.\nUse in any medium to dark colored beer.\nExamples: Ales, Marzens, Amber Ale, India Pale Ale"
        },
        {
          id: 2,
          name: "Amber Liquid Extract",
          origin: 8,
          yield: 78.0,
          color: 12.5,
          protein: 11.7,
          mash: 1,
          description:
            "Unhopped amber color liquid extract.\nUse as a base malt for any Ale.\nExamples: Amber ale, India Pale Ale, Munich style, Marzen, Bock"
        },
        {
          id: 3,
          name: "Barley Hulls",
          origin: 8,
          yield: 0.0,
          color: 0.0,
          protein: 11.7,
          mash: 1,
          description:
            "Hulls are introduced to improve the speed of lautering when making high gravity or high adjunct beers.\nHulls are neutral in flavor, body and color, and are inert\nGood for wheat beers, Wits, and others that have high protein mashes."
        },
        {
          id: 4,
          name: "Barley, Torrefied",
          origin: 8,
          yield: 79.0,
          color: 1.7,
          protein: 16.0,
          mash: 1,
          description:
            'Raw barley that has been "popped" open to open kernels\nUsed in place of raw barley for faster conversion and higher yields.\nHigh in haze producing protein'
        },
        {
          id: 5,
          name: "Black (Patent) Malt",
          origin: 8,
          yield: 55.0,
          color: 500.0,
          protein: 13.2,
          mash: 1,
          description:
            "Dark color and dry roasted flavor characteristic of Stouts and Porters\nUse for: Coloring in small amounts, or flavoring of Stouts and Porters in larger amounts."
        },
        {
          id: 6,
          name: "Black Barley (Stout)",
          origin: 8,
          yield: 55.0,
          color: 500.0,
          protein: 13.2,
          mash: 1,
          description:
            'Unmalted barley roasted at high temperature to create a dry, coffee like flavor.\nImparts a sharp acrid flavor characteristic of dry stouts.\nGives "dryness" to a stout or porter -- much more so than regular Roasted Barley'
        },
        {
          id: 7,
          name: "Brown Sugar, Dark",
          origin: 8,
          yield: 100.0,
          color: 50.0,
          protein: 11.7,
          mash: 1,
          description:
            "Imparts a rich sweet flavor. Used in Scottish ales, holiday ales and some old ales."
        },
        {
          id: 8,
          name: "Brown Sugar, Light",
          origin: 8,
          yield: 100.0,
          color: 8.0,
          protein: 11.7,
          mash: 1,
          description:
            "Imparts a rich sweet flavor. Used in Scottish ales, holiday ales and some old ales."
        },
        {
          id: 9,
          name: "Candi Sugar, Amber",
          origin: 2,
          yield: 78.3,
          color: 75.0,
          protein: 11.7,
          mash: 1,
          description:
            "Crystalized Candi Sugar (Sucrose) used in many Belgian Tripels, Dubbels, and holiday ales.  Adds head retention and sweet aroma to beer.  Darker variants also add color."
        },
        {
          id: 10,
          name: "Candi Sugar, Clear",
          origin: 2,
          yield: 78.3,
          color: 0.5,
          protein: 11.7,
          mash: 1,
          description:
            "Crystalized Candi Sugar (Sucrose) used in many Belgian Tripels, Dubbels, and holiday ales.  Adds head retention and sweet aroma to beer.  Darker variants also add color."
        },
        {
          id: 11,
          name: "Candi Syrup - 90",
          origin: 2,
          yield: 69.57,
          color: 90.0,
          protein: 11.7,
          mash: 1,
          description:
            "Liquid Candi Sugar (Sucrose) from beets and dates used in many Belgian Tripels, Dubbels, and holiday ales.  Adds head retention and sweet aroma to beer.  Darker variants also add color."
        },
        {
          id: 12,
          name: "Cane (Beet) Sugar",
          origin: 8,
          yield: 100.0,
          color: 0.0,
          protein: 11.7,
          mash: 1,
          description:
            "Common household baking sugar.\nLightens flavor and body of beer.\nCan contribute a cider-like flavor to the beer if not cold-fermented or used in large quantities."
        },
        {
          id: 13,
          name: "Cara-Pils/Dextrine",
          origin: 8,
          yield: 72.0,
          color: 2.0,
          protein: 13.2,
          mash: 1,
          description:
            'Significantly increases foam/head retention and body of the beer.\nAlso sold under the names "Dextrine" and "Cara-Foam"'
        },
        {
          id: 14,
          name: "Caraamber",
          origin: 8,
          yield: 75.0,
          color: 30.0,
          protein: 13.2,
          mash: 1,
          description:
            'Adds body, color and improves head retention.\nAlso called "Crystal" malt.'
        },
        {
          id: 15,
          name: "Caraaroma",
          origin: 6,
          yield: 75.0,
          color: 130.0,
          protein: 11.7,
          mash: 1,
          description:
            "Very dark crystal malt - similar to a crystal 120 or Caramunich 120 malt.  Adds strong caramel flavor, red color, and malty aroma."
        },
        {
          id: 16,
          name: "Carafa I",
          origin: 6,
          yield: 70.0,
          color: 337.0,
          protein: 11.7,
          mash: 1,
          description:
            "Used to intensify aroma and color in dark, Munich beers and stouts."
        },
        {
          id: 17,
          name: "Carafa II",
          origin: 6,
          yield: 70.0,
          color: 412.0,
          protein: 11.7,
          mash: 1,
          description:
            "Used to intensify aroma and color in dark, Munich beers and stouts."
        },
        {
          id: 18,
          name: "Carafa III",
          origin: 6,
          yield: 70.0,
          color: 525.0,
          protein: 11.7,
          mash: 1,
          description: "Dark color and aroma - used in some German beers"
        },
        {
          id: 19,
          name: "Carafoam",
          origin: 8,
          yield: 72.0,
          color: 2.0,
          protein: 13.2,
          mash: 1,
          description:
            'Significantly increases foam/head retention and body of the beer.\nAlso sold under the names "Dextrine" and "Cara-Pils (TM)"'
        },
        {
          id: 20,
          name: "Caramel Wheat Malt",
          origin: 6,
          yield: 75.0,
          color: 46.0,
          protein: 10.0,
          mash: 1,
          description:
            "Caramel wheat malt - emphasizes wheat malt aroma and adds color to the beer.  Popular for Dunkelweizens.  Also known as Carawheat -- which is a registered trademark of Wyermann Malting."
        },
        {
          id: 21,
          name: "Crystal Malt - 10L",
          origin: 8,
          yield: 75.0,
          color: 10.0,
          protein: 13.2,
          mash: 1,
          description:
            'Adds body, color and improves head retention.\nAlso called "Crystal" malt.'
        },
        {
          id: 22,
          name: "Crystal Malt - 20L",
          origin: 8,
          yield: 75.0,
          color: 20.0,
          protein: 13.2,
          mash: 1,
          description:
            'Adds body, color and improves head retention.\nAlso called "Crystal" malt.'
        },
        {
          id: 23,
          name: "Crystal Malt - 30L",
          origin: 8,
          yield: 75.0,
          color: 30.0,
          protein: 13.2,
          mash: 1,
          description:
            'Adds body, color and improves head retention.\nAlso called "Crystal" malt.'
        },
        {
          id: 24,
          name: "Crystal Malt - 40L",
          origin: 8,
          yield: 74.0,
          color: 40.0,
          protein: 13.2,
          mash: 1,
          description:
            'Adds body, color and improves head retention.\nAlso called "Crystal" malt.'
        },
        {
          id: 25,
          name: "Caramel/Crystal Malt - 60L",
          origin: 8,
          yield: 74.0,
          color: 60.0,
          protein: 13.2,
          mash: 1,
          description:
            'Adds body, color and improves head retention.\nAlso called "Crystal" malt.'
        },
        {
          id: 26,
          name: "Crystal Malt - 80L",
          origin: 8,
          yield: 74.0,
          color: 80.0,
          protein: 13.2,
          mash: 1,
          description:
            'Adds body, color and improves head retention.\nAlso called "Crystal" malt.'
        },
        {
          id: 27,
          name: "Caramel/Crystal Malt -120L",
          origin: 8,
          yield: 72.0,
          color: 120.0,
          protein: 10.2,
          mash: 1,
          description:
            'Adds body, color and improves head retention.\nAlso called "Crystal" malt.  Very Dark'
        },
        {
          id: 28,
          name: "Caramunich Malt",
          origin: 2,
          yield: 71.7,
          color: 56.0,
          protein: 0.0,
          mash: 1,
          description:
            "Caramel, copper colored malt.  Used in Belgian ales and German bocks."
        },
        {
          id: 29,
          name: "Carared",
          origin: 8,
          yield: 75.0,
          color: 20.0,
          protein: 13.2,
          mash: 1,
          description:
            'Adds body, color and improves head retention.\nAlso called "Crystal" malt.'
        },
        {
          id: 30,
          name: "Caravienne Malt",
          origin: 2,
          yield: 73.9,
          color: 22.0,
          protein: 0.0,
          mash: 1,
          description:
            "Light Belgian crystal malt.  Used in light Trappist and Abbey style Belgian ales."
        },
        {
          id: 31,
          name: "Chocolate Malt",
          origin: 8,
          yield: 60.0,
          color: 350.0,
          protein: 13.2,
          mash: 1,
          description:
            "Dark malt that gives a rich red or brown color and nutty flavor.\nUse for: Brown ales, porters, some stouts\nMaintains some malty flavor, not as dark as roasted malt."
        },
        {
          id: 32,
          name: "Chocolate Malt",
          origin: 7,
          yield: 73.0,
          color: 450.0,
          protein: 10.5,
          mash: 1,
          description:
            "Dark malt that gives a rich red or brown color and nutty flavor.\nUse for: Brown ales, porters, some stouts\nMaintains some malty flavor, not as dark as roasted malt."
        },
        {
          id: 33,
          name: "Chocolate Rye Malt",
          origin: 6,
          yield: 67.5,
          color: 250.0,
          protein: 11.7,
          mash: 1,
          description:
            "Primarily used for color and aroma in top-fermented specialty beers."
        },
        {
          id: 34,
          name: "Chocolate Wheat Malt (Midnight)",
          origin: 8,
          yield: 54.3,
          color: 425.0,
          protein: 13.0,
          mash: 1,
          description:
            "Intensifies aroma and color in top-fermented beers such as dark wheat beers.  Also called Chocolate Wheat Malt.  Kilned raw wheat - adds a deep, dark brown color to dunkelweizens and other dark beer styles. Roasted, woody, charcoal or burnt toast flavor depending on degree of roasting."
        },
        {
          id: 35,
          name: "Corn Sugar (Dextrose)",
          origin: 8,
          yield: 100.0,
          color: 0.0,
          protein: 11.7,
          mash: 1,
          description:
            "Widely used for bottling at rate of approx 2/3 cup per 5 gallons of beer"
        },
        {
          id: 36,
          name: "Corn Syrup",
          origin: 8,
          yield: 78.3,
          color: 1.0,
          protein: 11.7,
          mash: 1,
          description:
            "Syrup derived from corn with many of the same properties as corn sugar.  May be used to enhance gravity without adding much body or flavor.  Limit percentage in batch to avoid wine/cider flavors."
        },
        {
          id: 37,
          name: "Dark Dry Extract",
          origin: 8,
          yield: 95.0,
          color: 17.5,
          protein: 11.7,
          mash: 1,
          description:
            "Dark dry extract for general purpose use.\nUse as base or to increase gravity of any dark ale or lager."
        },
        {
          id: 38,
          name: "CBW Dark Liquid Extract",
          origin: 8,
          yield: 76.09,
          color: 30.0,
          protein: 11.7,
          mash: 1,
          description:
            "Unhopped dark liquid extract.\nUse as a base malt for any dark beer.\nExamples: Porter, Brown ale, Bock, Oktoberfest, Stouts"
        },
        {
          id: 39,
          name: "Dememera Sugar",
          origin: 7,
          yield: 100.0,
          color: 2.0,
          protein: 11.7,
          mash: 1,
          description:
            "Dark, unrefined brown sugar that contains molasses and other dark impurities.  Great for brown ales and porters.  Adds slight sweetness and smooth character."
        },
        {
          id: 40,
          name: "Extra Light Dry Extract",
          origin: 8,
          yield: 95.0,
          color: 3.0,
          protein: 11.7,
          mash: 1,
          description:
            "Very light color dry malt extract for general purpose use.\nUse as base or to increase gravity of any ale or lager."
        },
        {
          id: 41,
          name: "Grits",
          origin: 8,
          yield: 80.0,
          color: 1.0,
          protein: 0.0,
          mash: 1,
          description:
            "Imparts a corn or grain taste.  Mash required. Used to increase gravity of American lagers."
        },
        {
          id: 42,
          name: "Honey",
          origin: 8,
          yield: 75.0,
          color: 1.0,
          protein: 11.7,
          mash: 1,
          description:
            "Can be used to lighten flavor and body when substituted for malt.\nGenerally limit to 30% when used as an adjunct. Pasturize and add to primary during fermentation. Use up to 100% for meads."
        },
        {
          id: 43,
          name: "Invert Sugar",
          origin: 7,
          yield: 100.0,
          color: 0.0,
          protein: 11.7,
          mash: 1,
          description:
            "Used to increase starting gravity and also as an adjunct for some Belgian and English ales."
        },
        {
          id: 44,
          name: "Light Dry Extract",
          origin: 8,
          yield: 95.0,
          color: 8.0,
          protein: 11.7,
          mash: 1,
          description:
            "Pale dry malt extract for general purpose use.\nUse as base or to increase gravity of any full bodied ale or lager."
        },
        {
          id: 45,
          name: "Lyle's Golden Syrup",
          origin: 7,
          yield: 78.3,
          color: 0.0,
          protein: 11.7,
          mash: 1,
          description:
            "Liquid Invert Sugar.  Used to increase alcohol and lighten the beer without alterning flavor.  Used in Belgian ales and some English ales."
        },
        {
          id: 46,
          name: "Maple Syrup",
          origin: 8,
          yield: 65.2,
          color: 35.0,
          protein: 11.7,
          mash: 1,
          description:
            "If added during the boil it will add a dry, woodsy flavor. If added at bottling, the smooth maple flavor comes through.  Used for maple ales, porters, browns."
        },
        {
          id: 47,
          name: "Milk Sugar (Lactose)",
          origin: 8,
          yield: 76.1,
          color: 0.0,
          protein: 11.7,
          mash: 1,
          description:
            "Not fully fermentable, so it adds lasting sweetness. Lactose can be added to lend  sweetness to Sweet Stouts and Porters."
        },
        {
          id: 48,
          name: "Molasses",
          origin: 8,
          yield: 78.3,
          color: 80.0,
          protein: 11.7,
          mash: 1,
          description:
            "Imparts a strong, sweet flavor.  Used primarily in stouts and porters."
        },
        {
          id: 49,
          name: "Pale Liquid Extract",
          origin: 8,
          yield: 78.0,
          color: 8.0,
          protein: 11.7,
          mash: 1,
          description:
            "Unhopped pale liquid extract.\nUse as a base malt for any ale or lager."
        },
        {
          id: 50,
          name: "Peat Smoked Malt",
          origin: 7,
          yield: 74.0,
          color: 2.8,
          protein: 0.0,
          mash: 1,
          description:
            "Robust smoky malt that provides a smoky flavor.  Used in scottish ales and wee heavy ales."
        },
        {
          id: 51,
          name: "Pilsner Liquid Extract",
          origin: 8,
          yield: 78.0,
          color: 3.5,
          protein: 11.7,
          mash: 1,
          description:
            "Unhopped pale liquid extract.\nUse as a base malt for any ale or lager."
        },
        {
          id: 52,
          name: "Rice Extract Syrup",
          origin: 8,
          yield: 69.6,
          color: 7.0,
          protein: 11.7,
          mash: 1,
          description:
            "Used like other rice adjuncts in American and Japenes lagers to provide a dry, clean taste and light body.  Adds gravity without changing body or flavor substantially.  Use in place of corn sugar in small quantities."
        },
        {
          id: 53,
          name: "Rice Hulls",
          origin: 8,
          yield: 0.0,
          color: 0.0,
          protein: 11.7,
          mash: 1,
          description:
            "Hulls are introduced to improve the speed of lautering when making high gravity or high adjunct beers.\nHulls are neutral in flavor, body and color, and are inert\nGood for wheat beers, Wits, and others that have high protein mashes."
        },
        {
          id: 54,
          name: "Roasted Barley",
          origin: 8,
          yield: 55.0,
          color: 300.0,
          protein: 13.2,
          mash: 1,
          description:
            "Roasted at high temperature to create a burnt, grainy, coffee like flavor.\nImparts a red to deep brown color to beer, and very strong roasted flavor.\nUse 2-4% in Brown ales to add a nutty flavor, or 3-10% in Porters and Stouts for coffee flavor."
        },
        {
          id: 55,
          name: "Rye Malt",
          origin: 8,
          yield: 63.0,
          color: 4.7,
          protein: 10.3,
          mash: 1,
          description:
            'Adds a dry, crisp character to the beer.  \nYields a deep red color, and a distinctive rye flavor\nMust limit to 10-15% fo the mash as it tends to produce "stuck" mashes.'
        },
        {
          id: 56,
          name: "Rye, Flaked",
          origin: 8,
          yield: 78.3,
          color: 2.0,
          protein: 0.0,
          mash: 1,
          description:
            "Imparts a dry, crisp rye flavor to rye beers.  Can be easier to mash than raw rye."
        },
        {
          id: 57,
          name: "Smoked Malt",
          origin: 6,
          yield: 80.0,
          color: 9.0,
          protein: 11.5,
          mash: 1,
          description:
            'Malt that has been smoked over an open fire.\nCreates a distinctive "smoked" flavor and aroma.\nUsed primarily for German Rauchbier but can also be added to Brown Ales and Porters.'
        },
        {
          id: 58,
          name: "Special B Malt",
          origin: 2,
          yield: 65.2,
          color: 180.0,
          protein: 0.0,
          mash: 1,
          description:
            "Extreme caramel aroma and flavored malt.  Used in dark Belgian Abbey and Trappist ales.  Unique flavor and aroma."
        },
        {
          id: 59,
          name: "Sugar, Table (Sucrose)",
          origin: 8,
          yield: 100.0,
          color: 1.0,
          protein: 11.7,
          mash: 1,
          description:
            "White table sugar, or sucrose primarily is used to increase alcohol. Using too much will add a cider flavor to beer."
        },
        {
          id: 60,
          name: "Treacle",
          origin: 7,
          yield: 78.3,
          color: 100.0,
          protein: 11.7,
          mash: 1,
          description:
            'UK mixture of molasses, invert sugar and golden (corn) syrup.  Imparts an intense sweet flavor and dark color.  Used in dark English ales.  Also called "Black Treacle" or the brand name "Lyle\'s Black Treacle Syrup."'
        },
        {
          id: 61,
          name: "Turbinado",
          origin: 7,
          yield: 95.7,
          color: 10.0,
          protein: 11.7,
          mash: 1,
          description:
            "Light, raw brown sugar.  May be used in British pale ales or high gravity Belgian ales.  Limit percentage used to avoid undesirable flavors.  Similar to Demerara sugar."
        },
        {
          id: 62,
          name: "Wheat Dry Extract",
          origin: 8,
          yield: 95.0,
          color: 8.0,
          protein: 11.7,
          mash: 1,
          description:
            "Wheat based dry extract for use in all wheat beers.\nUse as base or to increase gravity of any wheat beer.\nExamples: Weizen, weiss, wheat ales and lagers"
        },
        {
          id: 63,
          name: "Wheat Liquid Extract",
          origin: 8,
          yield: 78.0,
          color: 8.0,
          protein: 11.7,
          mash: 1,
          description:
            "Unhopped Wheat liquid malt extract.\nContains approx 60% Wheat, 40% Barley\nUse for Bavarian wheats, weizens, weiss and dunkel weizen styles."
        },
        {
          id: 64,
          name: "Munich Malt",
          origin: 6,
          yield: 80.0,
          color: 9.0,
          protein: 11.5,
          mash: 1,
          description:
            "Malty-sweet flavor characteristic and adds a reddish amber color to the beer.\nDoes not contribute signficantly to body or head retention.\nUse for: Bock, Porter, Marzen, Oktoberfest beers"
        },
        {
          id: 65,
          name: "Munich Malt - 10L",
          origin: 8,
          yield: 77.0,
          color: 10.0,
          protein: 13.5,
          mash: 1,
          description:
            "Malty-sweet flavor characteristic and adds a slight orange color to the beer.\nDoes not contribute signficantly to body or head retention.\nUse for: Bock, Porter, Marzen, Oktoberfest beers"
        },
        {
          id: 66,
          name: "Munich Malt - 20L",
          origin: 8,
          yield: 75.0,
          color: 20.0,
          protein: 13.5,
          mash: 1,
          description:
            "Malty-sweet flavor characteristic and adds a orange to deep orange color to the beer.\nDoes not contribute signficantly to body or head retention.\nUse for: Bock, Porter, Marzen, Oktoberfest beers"
        },
        {
          id: 67,
          name: "Barley, Flaked",
          origin: 8,
          yield: 70.0,
          color: 1.7,
          protein: 13.5,
          mash: 1,
          description:
            "Adds significant body to Porters and Stouts.  High haze producing protein prevents use in light beers."
        },
        {
          id: 68,
          name: "Barley, Raw",
          origin: 8,
          yield: 60.9,
          color: 2.0,
          protein: 11.7,
          mash: 1,
          description:
            "Raw, unmalted barley can be used to add body to your beer.  Use in homebrew requires very fine milling combined with a decoction or multi-stage mash.  Performs best when used in small quantities with well modified grains."
        },
        {
          id: 69,
          name: "Oats, Flaked",
          origin: 8,
          yield: 80.0,
          color: 1.0,
          protein: 9.0,
          mash: 1,
          description:
            "Adds body, mouth feel and head retention to the beer\nUsed in oatmeal stouts and porters\nAdds substantial protein haze to light beers\nProtein rest recommended unless flakes are pregelatinized"
        },
        {
          id: 70,
          name: "Oats, Malted",
          origin: 8,
          yield: 80.0,
          color: 1.0,
          protein: 9.0,
          mash: 1,
          description:
            "Malted oats.  Adds body, mouth feel and head retention to the beer  Creates chill haze in lighter beers, so is primarily used in dark ones."
        },
        {
          id: 71,
          name: "Amber Malt",
          origin: 7,
          yield: 75.0,
          color: 22.0,
          protein: 10.0,
          mash: 1,
          description:
            "Roasted specialty malt used in some English browns, milds and old ales to add color and a biscuit taste.  Intense flavor - so limit use. Low diastatic power so must be mashed with well modified malts."
        },
        {
          id: 72,
          name: "Biscuit Malt",
          origin: 2,
          yield: 79.0,
          color: 23.0,
          protein: 10.5,
          mash: 1,
          description:
            "Use for English ales, brown ales and porters.\nAdds a biscuit like flavor and aroma.\nCan be used as a substitute for toasted malt."
        },
        {
          id: 73,
          name: "Brumalt",
          origin: 6,
          yield: 71.7,
          color: 23.0,
          protein: 7.0,
          mash: 1,
          description:
            "Dark German malt developed to add malt flavor of Alt, Marzen and Oktoberfest beers. Helps create authentic maltiness without having to do a decoction mash.  Rarely available for homebrewers."
        },
        {
          id: 74,
          name: "Honey Malt",
          origin: 3,
          yield: 80.0,
          color: 25.0,
          protein: 10.5,
          mash: 1,
          description:
            "Intensely sweet - adds a sweet malty flavor sometimes associated with honey.  Also called Brumalt."
        },
        {
          id: 75,
          name: "Melanoiden Malt",
          origin: 6,
          yield: 80.0,
          color: 20.0,
          protein: 11.0,
          mash: 1,
          description:
            "Aromatic malt from Banberg, Germany.  Promotes a full flavor and rounds off beer color. Promotes deep red color and malty flavor."
        },
        {
          id: 76,
          name: "Toasted Malt",
          origin: 7,
          yield: 71.7,
          color: 27.0,
          protein: 11.7,
          mash: 1,
          description:
            "Toasted malt can be made at home by toasting pale malted barley for 10-15 minutes at 350 F.  Similar to Biscuit or Victory malt - this malt adds reddish/orange color and improved body without sweetness.  Toasted flavor.  Mashing required to avoid haze."
        },
        {
          id: 77,
          name: "Victory Malt",
          origin: 8,
          yield: 73.0,
          color: 25.0,
          protein: 13.2,
          mash: 1,
          description:
            'Toasted malt that adds a "Biscuit" or toasted flavor to English ales.\nUse for: Nut brown ales, porters'
        },
        {
          id: 78,
          name: "Brown Malt",
          origin: 7,
          yield: 70.0,
          color: 65.0,
          protein: 0.0,
          mash: 1,
          description:
            "Imparts a dry, biscuit flavor. Used in nut brown ales, porters and some Belgian ales."
        },
        {
          id: 79,
          name: "Special Roast",
          origin: 8,
          yield: 72.0,
          color: 50.0,
          protein: 10.5,
          mash: 1,
          description:
            "Use for English ales, nut brown ales and porters.\nAdds a toasted, biscuit like flavor and aroma"
        },
        {
          id: 80,
          name: "Aromatic Malt",
          origin: 2,
          yield: 78.0,
          color: 26.0,
          protein: 11.8,
          mash: 1,
          description:
            "Provides a very strong malt flavor and aroma to your beer."
        },
        {
          id: 81,
          name: "Acid Malt",
          origin: 6,
          yield: 58.7,
          color: 3.0,
          protein: 6.0,
          mash: 1,
          description:
            "Acid malt contains acids from natural lactic acids.  Used by German brewers to adjust malt PH without chemicals to adhere to German purity laws.  Also enhances the head retention."
        },
        {
          id: 82,
          name: "Mild Malt",
          origin: 7,
          yield: 80.0,
          color: 4.0,
          protein: 10.6,
          mash: 1,
          description:
            'Also called "English Mild" - a light specialty malt used in Brown Ales'
        },
        {
          id: 83,
          name: "Pale Malt (2 Row) Bel",
          origin: 2,
          yield: 80.0,
          color: 3.0,
          protein: 10.5,
          mash: 1,
          description:
            "Base malt for all beer styles\nHigher potential yield than US, English equivalent pale ale malts"
        },
        {
          id: 84,
          name: "Pale Malt (2 Row) UK",
          origin: 7,
          yield: 78.0,
          color: 3.0,
          protein: 10.1,
          mash: 1,
          description:
            "Base malt for all English beer styles\nLower diastatic power than American 2 Row Pale Malt"
        },
        {
          id: 85,
          name: "Pale Malt (2 Row) US",
          origin: 8,
          yield: 79.0,
          color: 2.0,
          protein: 12.3,
          mash: 1,
          description: "Base malt for all beer styles"
        },
        {
          id: 86,
          name: "Pale Malt (6 Row) US",
          origin: 8,
          yield: 76.0,
          color: 2.0,
          protein: 13.0,
          mash: 1,
          description: "Base malt for all beer styles"
        },
        {
          id: 87,
          name: "Pale Malt, Maris Otter",
          origin: 7,
          yield: 82.5,
          color: 3.0,
          protein: 11.7,
          mash: 1,
          description:
            "Premium base malt from the UK.  Popular for many English styles of beer including ales, pale ales and bitters."
        },
        {
          id: 88,
          name: "Vienna Malt",
          origin: 6,
          yield: 78.0,
          color: 3.5,
          protein: 11.0,
          mash: 1,
          description:
            "Kiln dried malt darker than Pale Malt, but not as dark as Munich Malt\nImparts a golden to orange color to the beer."
        },
        {
          id: 89,
          name: "Lager Malt",
          origin: 0,
          yield: 82.5,
          color: 2.0,
          protein: 11.0,
          mash: 1,
          description:
            "Very light lager malt used to make Pilsners, Lagers and other light beers.  May be used as a base malt."
        },
        {
          id: 90,
          name: "Pilsner (2 Row) Bel",
          origin: 2,
          yield: 79.0,
          color: 2.0,
          protein: 10.5,
          mash: 1,
          description: "Belgian base malt for Continental lagers"
        },
        {
          id: 91,
          name: "Pilsner (2 Row) Ger",
          origin: 6,
          yield: 81.0,
          color: 2.0,
          protein: 11.0,
          mash: 1,
          description: "German base for Pilsners and Bohemian Lagers"
        },
        {
          id: 92,
          name: "Pilsner (2 Row) UK",
          origin: 7,
          yield: 78.0,
          color: 1.0,
          protein: 10.0,
          mash: 1,
          description: "Pilsner base malt"
        },
        {
          id: 93,
          name: "Rice, Flaked",
          origin: 8,
          yield: 70.0,
          color: 1.0,
          protein: 10.0,
          mash: 1,
          description:
            "Used to add fermentables without increasing body or flavor.\nProduces a milder, less grainy tasting beer.\nExamples: American lagers, Bohemian lagers, Pilsners"
        },
        {
          id: 94,
          name: "Corn, Flaked",
          origin: 8,
          yield: 80.0,
          color: 1.3,
          protein: 10.0,
          mash: 1,
          description:
            "Generally a neutral flavor, used to reduce maltiness of beer\nProduces beer with a milder, less malty flavor\nUses: Primarily for light Bohemian and Pilsner lagers"
        },
        {
          id: 95,
          name: "Wheat Malt, Bel",
          origin: 2,
          yield: 81.0,
          color: 2.0,
          protein: 11.5,
          mash: 1,
          description: "Malted wheat for use in Wheat beers"
        },
        {
          id: 96,
          name: "Wheat Malt, Dark",
          origin: 6,
          yield: 84.0,
          color: 9.0,
          protein: 11.5,
          mash: 1,
          description:
            "Dark malted wheat base for use in dark wheat styles such as Dunkleweizen."
        },
        {
          id: 97,
          name: "Wheat Malt, Ger",
          origin: 6,
          yield: 84.0,
          color: 2.0,
          protein: 12.5,
          mash: 1,
          description: "Malted wheat base for use in all wheat styles"
        },
        {
          id: 98,
          name: "Wheat, Flaked",
          origin: 8,
          yield: 77.0,
          color: 1.6,
          protein: 16.0,
          mash: 1,
          description:
            "Flaked wheat adds to increased body and foam retention\nUsed in place of raw or torrified wheat for faster conversion and better yield.\nMay be used in small amounts to improve head retention and body\nExamples: Belgian White beer, Wit"
        },
        {
          id: 99,
          name: "Wheat, Roasted",
          origin: 6,
          yield: 54.3,
          color: 425.0,
          protein: 13.0,
          mash: 1,
          description:
            "Also called Chocolate Wheat Malt.  Kilned raw wheat - adds a deep, dark brown color to dunkelweizens and other dark beer styles. Roasted, woody, charcoal or burnt toast flavor depending on degree of roasting."
        },
        {
          id: 100,
          name: "Wheat, Torrified",
          origin: 8,
          yield: 79.0,
          color: 1.7,
          protein: 16.0,
          mash: 1,
          description:
            'Unmodified wheat that has been "popped" to open the kernels\nUsed primarily in place of raw wheat when making Belgian White and Wit\nFaster conversion and higher yield than raw wheat\nProtein rest recommended when mashing'
        },
        {
          id: 101,
          name: "White Wheat Malt",
          origin: 8,
          yield: 86.0,
          color: 2.4,
          protein: 14.5,
          mash: 1,
          description:
            "White wheat gives a malty flavor not available from raw wheat.\nUsed in Weiss, Wit and White beers"
        },
        {
          id: 102,
          name: "Caramel Malt - 10L",
          origin: 8,
          yield: 75.0,
          color: 10.0,
          protein: 13.2,
          mash: 1,
          description:
            'Adds body, color and improves head retention.\nAlso called "Crystal" malt.'
        },
        {
          id: 103,
          name: "Caramel Malt - 20L",
          origin: 8,
          yield: 75.0,
          color: 20.0,
          protein: 13.2,
          mash: 1,
          description:
            'Adds body, color and improves head retention.\nAlso called "Crystal" malt.'
        },
        {
          id: 104,
          name: "Caramel Malt - 30L",
          origin: 8,
          yield: 75.0,
          color: 30.0,
          protein: 13.2,
          mash: 1,
          description:
            'Adds body, color and improves head retention.\nAlso called "Crystal" malt.'
        },
        {
          id: 105,
          name: "Caramel Malt - 40L",
          origin: 8,
          yield: 74.0,
          color: 40.0,
          protein: 13.2,
          mash: 1,
          description:
            'Adds body, color and improves head retention.\nAlso called "Crystal" malt.'
        },
        {
          id: 106,
          name: "Pale Chocolate Malt",
          origin: 5,
          yield: 71.0,
          color: 200.0,
          protein: 11.7,
          mash: 1,
          description: ""
        },
        {
          id: 107,
          name: "Chocolate Wheat Malt",
          origin: 6,
          yield: 71.0,
          color: 400.0,
          protein: 11.7,
          mash: 1,
          description:
            "Intensifies aroma and color in top-fermented beers such as dark wheat beers."
        },
        {
          id: 108,
          name: "Red Wheat Malt",
          origin: 8,
          yield: 86.0,
          color: 5.0,
          protein: 14.5,
          mash: 1,
          description:
            "Red wheat gives a malty flavor not available from raw wheat.  A bit darker than white wheat, but otherwise similar."
        },
        {
          id: 109,
          name: "Munich I",
          origin: 6,
          yield: 80.0,
          color: 15.0,
          protein: 11.5,
          mash: 1,
          description:
            "Malty-sweet flavor characteristic and adds a reddish amber color to the beer.\nDoes not contribute signficantly to body or head retention.\nUse for: Bock, Porter, Marzen, Oktoberfest beers\n\nhttp://www.weyermann.de/eng/produkte.asp?PN=2&idkat=15&umenue=yes&idmenue=0&sprache=2"
        },
        {
          id: 110,
          name: "Candi Sugar, Dark",
          origin: 2,
          yield: 78.3,
          color: 275.0,
          protein: 11.7,
          mash: 1,
          description:
            "Crystalized Candi Sugar (Sucrose) used in many Belgian Tripels, Dubbels, and holiday ales.  Adds head retention and sweet aroma to beer.  Darker variants also add color."
        },
        {
          id: 111,
          name: "Caramel Malt - 80L",
          origin: 8,
          yield: 74.0,
          color: 80.0,
          protein: 13.2,
          mash: 1,
          description:
            'Adds body, color and improves head retention.\nAlso called "Crystal" malt.'
        },
        {
          id: 112,
          name: "Dark Raisins",
          origin: 0,
          yield: 70.0,
          color: 3.0,
          protein: 11.7,
          mash: 1,
          description:
            "Suggestions are to chop and/or puree, and to boil briefly to sterilize and either add at KO (leaving behind with hop matter) or late in primary"
        },
        {
          id: 113,
          name: "Candi Syrup - 180",
          origin: 2,
          yield: 69.57,
          color: 180.0,
          protein: 11.7,
          mash: 1,
          description:
            "Liquid Candi Sugar (Sucrose) from beets and dates used in many Belgian Tripels, Dubbels, and holiday ales.  Adds head retention and sweet aroma to beer.  Darker variants also add color."
        },
        {
          id: 114,
          name: "Crystal Malt - 60L",
          origin: 8,
          yield: 74.0,
          color: 60.0,
          protein: 13.2,
          mash: 1,
          description:
            'Adds body, color and improves head retention.\nAlso called "Crystal" malt.'
        },
        {
          id: 115,
          name: "Maple Sap",
          origin: 0,
          yield: 3.5,
          color: 0.0,
          protein: 11.7,
          mash: 1,
          description: "Yield is the %Bx"
        },
        {
          id: 116,
          name: "Dark Liquid Extract",
          origin: 8,
          yield: 78.0,
          color: 17.5,
          protein: 11.7,
          mash: 1,
          description:
            "Unhopped dark liquid extract.\nUse as a base malt for any dark beer.\nExamples: Porter, Brown ale, Bock, Oktoberfest, Stouts"
        },
        {
          id: 117,
          name: "Munich Malt - 30L",
          origin: 8,
          yield: 75.0,
          color: 30.0,
          protein: 13.5,
          mash: 1,
          description:
            "Malty-sweet flavor characteristic and adds a orange to deep orange color to the beer.\nDoes not contribute signficantly to body or head retention.\nUse for: Bock, Porter, Marzen, Oktoberfest beers"
        }
      ]);
    });
};
