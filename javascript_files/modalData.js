// Data definitions for each chart
function getModalData(dataId) {
    var modalDataMap = {
        'personal-consumption': {
            title: 'Personal consumption expenditures as % of GDP',
            source: 'WorldBank, Federal Reserve Bank of St. Louis (FRED)',
            lastUpdated: 'Sep 25, 2025',
            nextUpdate: 'Nov 26, 2025',
            dateRange: '1960-2024',
            unit: 'Percent of GDP',
            description: 'Personal consumption expenditure measures household and nonprofit spending on goods and services for the direct satisfaction of human needs or wants. This includes everything from food and housing to healthcare and entertainment. The indicator is expressed as a percentage of Gross Domestic Product (GDP)—the total value of goods and services produced in an economy during a given period.<br><br>When this share is high, markets are primarily oriented toward satisfying what individual humans want to buy. When it falls, a larger share of economic activity flows through other channels—business investment, government, or exports—where the link to individual human preferences is more indirect.',
            interpretation: 'This metric tracks how much of economic output flows directly to household spending decisions. A higher share means markets are more directly responsive to what humans choose to buy.<br><br>This data shows regular fluctuation and is influenced by economic factors other than AI (see Limitations). Thus it is best to ignore small fluctuations in the data and interpret this data alongside our other metrics.',
            limitations: '<ul><li>Household spending decisions are made by humans (or by AI acting as faithful agents for humans). If purchases made by future autonomous AI systems are classified as private consumption, this metric loses meaning</li><li>This metric is influenced by many things other than AI, like noise from recession-boom-cycles and the general economic structure (eg, how service-oriented a country is or how much spending is done by the government)</li><li>Other components of GDP, like investment, government, and exports, ultimately also serve human purposes</li><li>Notably, ~10% of US PCE is imputed rent for owner-occupied housing - not actual transactions. Additionally, ~3% of US PCE are not household consumption, but churches, charities or unions</li><li>This metric does not track whether AI assistants make purchasing decisions on behalf of humans</li></ul>',
            sources: [{
                name: 'World Bank Group - Households and NPISHs final consumption expenditure (% of GDP)',
                description: 'Annual measure of household and nonprofit spending as a share of gross domestic product, covering most countries globally. Data is compiled from national statistical offices, central banks, and OECD submissions, supplemented by World Bank staff estimates where official data is unavailable. The "World" aggregate is a GDP-weighted average, meaning large economies (US, China, EU) dominate the global figure. Many countries calculate consumption as a residual (GDP minus government, investment, and net exports), so measurement errors from other components accumulate here. Coverage expands over time—earlier years include fewer countries, which partly explains historical trends.',
                retrievedFrom: 'https://data.worldbank.org/indicator/NE.CON.PRVT.ZS',
                retrievedOn: '26.11.2025',
                citation: 'Households and NPISHs final consumption expenditure (% of GDP). World Bank World Development Indicators (2025)'
            }, {
                name: 'U.S. Bureau of Economic Analysis via FRED – Shares of gross domestic product: Personal consumption expenditures',
                description: 'Quarterly measure of US personal consumption expenditure as a share of GDP, published by the Bureau of Economic Analysis and distributed through the Federal Reserve Bank of St. Louis (FRED). Data is derived from retail sales surveys, Census Bureau surveys, and administrative records. Each quarterly estimate undergoes three revisions (advance, second, third), and annual updates can revise several years of historical data. The series is not seasonally adjusted. Includes imputed values—most notably owner-occupied housing rent (~10% of PCE), which estimates what homeowners would pay to rent their own homes. Nonprofits (churches, charities, unions) account for approximately 3% of the total.',
                retrievedFrom: 'https://fred.stlouisfed.org/series/DPCERE1Q156NBEA',
                retrievedOn: '26.11.2025',
                citation: 'Shares of gross domestic product: Personal consumption expenditures [DPCERE1Q156NBEA]. U.S. Bureau of Economic Analysis, retrieved from FRED, Federal Reserve Bank of St. Louis (2025)'
            }],
            processing: 'We cut off the FRED data from 1947-1960 to match the start of the data from the World Bank.'
        },
        // Overview tab placeholders
        'ai-empowerment': {
            title: 'AI Empowerment over Time',
            source: '[Add source]',
            lastUpdated: '-',
            nextUpdate: '-',
            dateRange: '2010-2035',
            unit: 'Index',
            description: '[Add description]',
            interpretation: '[Add interpretation]',
            limitations: '[Add limitations]'
        },
        'world-map': {
            title: 'World Map View over time',
            source: '[Add source]',
            lastUpdated: '-',
            nextUpdate: '-',
            dateRange: '-',
            unit: 'Index',
            description: '[Add description]',
            interpretation: '[Add interpretation]',
            limitations: '[Add limitations]'
        },
        'country-trends': {
            title: 'Country Trends',
            source: '[Add source]',
            lastUpdated: '-',
            nextUpdate: '-',
            dateRange: '-',
            unit: 'Index',
            description: '[Add description]',
            interpretation: '[Add interpretation]',
            limitations: '[Add limitations]'
        },
        'economic-index': {
            title: 'Economic Disempowerment Index',
            source: '[Add source]',
            lastUpdated: '-',
            nextUpdate: '-',
            dateRange: '-',
            unit: 'Index',
            description: '[Add description]',
            interpretation: '[Add interpretation]',
            limitations: '[Add limitations]'
        },
        'governmental-index': {
            title: 'Governmental Disempowerment Index',
            source: '[Add source]',
            lastUpdated: '-',
            nextUpdate: '-',
            dateRange: '-',
            unit: 'Index',
            description: '[Add description]',
            interpretation: '[Add interpretation]',
            limitations: '[Add limitations]'
        },
        'cultural-index': {
            title: 'Cultural Disempowerment Index',
            source: '[Add source]',
            lastUpdated: '-',
            nextUpdate: '-',
            dateRange: '-',
            unit: 'Index',
            description: '[Add description]',
            interpretation: '[Add interpretation]',
            limitations: '[Add limitations]'
        },
        // Economic tab placeholders
        'labor-share-gdp': {
            title: 'Labor share of GDP in the US',
            source: 'Federal Reserve Economic Data (FRED)',
            lastUpdated: '-',
            nextUpdate: '-',
            dateRange: '-',
            unit: '% of GDP',
            description: '[Add description]',
            interpretation: 'As human labor becomes a smaller part of the economy due to AI automation, people will lose power over economic decisions and outputs.',
            limitations: '[Add limitations]'
        },
        'unemployment-rate': {
            title: 'Total % of unemployment',
            source: 'World Bank',
            lastUpdated: '-',
            nextUpdate: '-',
            dateRange: '-',
            unit: 'Percent',
            description: '[Add description]',
            interpretation: '[Add interpretation]',
            limitations: '[Add limitations]'
        },
        'wage-productivity': {
            title: 'Median wage growth vs. productivity growth',
            source: 'OECD',
            lastUpdated: '-',
            nextUpdate: '-',
            dateRange: '-',
            unit: 'Index',
            description: '[Add description]',
            interpretation: '[Add interpretation]',
            limitations: '[Add limitations]'
        },
        'ai-layoffs': {
            title: '# of AI-driven layoffs',
            source: '[Add source]',
            lastUpdated: '-',
            nextUpdate: '-',
            dateRange: '-',
            unit: 'Count',
            description: '[Add description]',
            interpretation: '[Add interpretation]',
            limitations: '[Add limitations]'
        },
        'companies-using-ai': {
            title: 'Share of Companies Using Artificial Intelligence',
            source: 'McKinsey Global Survey on AI',
            lastUpdated: '-',
            nextUpdate: '-',
            dateRange: '-',
            unit: 'Percent',
            description: 'Shows the percentage of organizations reporting having adopted AI.',
            interpretation: 'The global trend shows rapid acceleration in 2024.',
            limitations: 'Obtained via Our World in Data. Survey-based data may have sampling biases.'
        },
        'ai-business-functions': {
            title: 'Survey on number of business functions where AI is used',
            source: 'McKinsey',
            lastUpdated: '-',
            nextUpdate: '-',
            dateRange: '-',
            unit: 'Count',
            description: '[Add description]',
            interpretation: '[Add interpretation]',
            limitations: '[Add limitations]'
        },
        'ai-business-decisions': {
            title: 'Fraction of business decisions/spending made by AIs',
            source: '[Add source]',
            lastUpdated: '-',
            nextUpdate: '-',
            dateRange: '-',
            unit: 'Percent',
            description: '[Add description]',
            interpretation: '[Add interpretation]',
            limitations: '[Add limitations]'
        },
        'ai-market-cap': {
            title: 'AI company market cap as % of S&P 500',
            source: '[Add source]',
            lastUpdated: '-',
            nextUpdate: '-',
            dateRange: '-',
            unit: 'Percent',
            description: '[Add description]',
            interpretation: '[Add interpretation]',
            limitations: '[Add limitations]'
        },
        'ai-market-growth': {
            title: '% of market growth caused by AI companies',
            source: '[Add source]',
            lastUpdated: '-',
            nextUpdate: '-',
            dateRange: '-',
            unit: 'Percent',
            description: '[Add description]',
            interpretation: '[Add interpretation]',
            limitations: '[Add limitations]'
        },
        'ai-investment': {
            title: 'Investment in AI companies/startups',
            source: 'State of AI Report',
            lastUpdated: '-',
            nextUpdate: '-',
            dateRange: '-',
            unit: 'USD',
            description: '[Add description]',
            interpretation: '[Add interpretation]',
            limitations: '[Add limitations]'
        },
        'ai-energy-usage': {
            title: 'Datacenter / AI energy usage as % of national/industrial energy',
            source: '[Add source]',
            lastUpdated: '-',
            nextUpdate: '-',
            dateRange: '-',
            unit: 'Percent',
            description: '[Add description]',
            interpretation: '[Add interpretation]',
            limitations: '[Add limitations]'
        },
        'ai-industry-growth': {
            title: 'Growth of AI-heavy industries vs AI-light industries',
            source: '[Add source]',
            lastUpdated: '-',
            nextUpdate: '-',
            dateRange: '-',
            unit: 'Percent',
            description: '[Add description]',
            interpretation: '[Add interpretation]',
            limitations: '[Add limitations]'
        },
        'output-per-employee': {
            title: 'Output per employee - AI-intensive industries vs others',
            source: 'EuroStat',
            lastUpdated: '-',
            nextUpdate: '-',
            dateRange: '-',
            unit: 'Index',
            description: '[Add description]',
            interpretation: '[Add interpretation]',
            limitations: '[Add limitations]'
        },
        // Governmental tab placeholders
        'govt-tax-revenue': {
            title: '% of government revenue from personal income taxes vs. corporate/AI-sector taxes',
            source: '[Add source]',
            lastUpdated: '-',
            nextUpdate: '-',
            dateRange: '-',
            unit: 'Percent',
            description: '[Add description]',
            interpretation: '[Add interpretation]',
            limitations: '[Add limitations]'
        },
        'ai-sector-income': {
            title: 'Share of national income from AI-heavy sectors',
            source: '[Add source]',
            lastUpdated: '-',
            nextUpdate: '-',
            dateRange: '-',
            unit: 'Percent',
            description: '[Add description]',
            interpretation: '[Add interpretation]',
            limitations: '[Add limitations]'
        },
        'ai-surveillance': {
            title: 'Use of AI for surveillance purposes',
            source: 'AI Global Surveillance Index',
            lastUpdated: '-',
            nextUpdate: '-',
            dateRange: '-',
            unit: 'Index',
            description: '[Add description]',
            interpretation: '[Add interpretation]',
            limitations: '[Add limitations]'
        },
        'govt-ai-spending': {
            title: 'Government spending on procurement to AI Companies',
            source: 'AI Index Report',
            lastUpdated: '-',
            nextUpdate: '-',
            dateRange: '-',
            unit: 'USD',
            description: 'Government spending on AI reflects how governments are increasingly relying on AI systems for public services and decision-making.',
            interpretation: '[Add interpretation]',
            limitations: '[Add limitations]'
        },
        'legislation-complexity': {
            title: 'Length/Complexity of legislation',
            source: '[Add source]',
            lastUpdated: '-',
            nextUpdate: '-',
            dateRange: '-',
            unit: 'Index',
            description: '[Add description]',
            interpretation: '[Add interpretation]',
            limitations: '[Add limitations]'
        },
        'democracy-index-owid': {
            title: 'Electoral Democracy Index worldwide',
            source: 'Varieties of Democracy (V-Dem) via Our World in Data',
            lastUpdated: 'March 17, 2025',
            nextUpdate: 'March 2026',
            dateRange: '1789-2024',
            unit: 'Index (0-1 scale)',
            description: 'The Electoral Democracy Index is the central estimate of the extent to which political leaders are elected under comprehensive suffrage in free and fair elections, and freedoms of association and expression are guaranteed.<br><br>The electoral principle of democracy seeks to embody the core value of making rulers responsive to citizens, achieved through electoral competition for the electorate\'s approval under circumstances when suffrage is extensive; political and civil society organizations can operate freely; elections are clean and not marred by fraud or systematic irregularities; and elections affect the composition of the chief executive of the country. In between elections, there is freedom of expression and an independent media capable of presenting alternative views on matters of political relevance.<br><br>The index ranges from 0 (low) to 1 (high), with higher values indicating a more democratic political system.',
            interpretation: '<ul><li>This index is useful if you are interested in big and small differences in democracy, want scores for almost all countries, and prefer a narrow understanding of democracy focused on electoral political institutions: broad voting rights and free, fair, and meaningful elections</li><li>The index is made up of five sub-indices: elected officials, free and fair elections, freedom of expression, freedom of association, and the share of adult citizens who have the right to vote</li><li>The "World" line represents a population-weighted average, which better reflects the average person\'s experience but means changes in large countries (China, India, US) dominate the global trend</li><li>A declining global democracy index could indicate increasing vulnerability to AI-driven surveillance, manipulation, or authoritarian governance</li></ul>',
            limitations: '<ul><li>The index takes a narrow view of democracy by focusing on electoral political institutions—for data that focuses on big differences in political systems or has a broad understanding of democracy, other sources may be more useful</li><li>The index is based mainly on assessments by V-Dem\'s approximately 3,500 country experts, which may contain subjective elements, supplemented by factual information coded by its own researchers</li><li>V-Dem covers many more countries since 1900, which affects regional averages—we filter data to start from 1900 for cleaner visualization</li><li>The connection between democracy levels and AI governance is indirect—high democracy scores don\'t guarantee good AI policy</li></ul>',
            sources: [{
                name: 'V-Dem – Democracy report',
                description: 'The Varieties of Democracy (V-Dem) project publishes data and research on democracy and human rights. It acknowledges that democracy can be characterized differently and measures electoral, liberal, participatory, deliberative, and egalitarian characterizations of democracy. The project relies on evaluations by around 3,500 country experts and supplementary work by its researchers to assess political institutions and the protection of rights. The project is managed by the V-Dem Institute, based at the University of Gothenburg in Sweden. This snapshot contains all 531 V-Dem indicators and 245 indices + 60 other indicators from other data sources.',
                retrievedFrom: 'https://v-dem.net/data/the-v-dem-dataset/',
                retrievedOn: 'March 17, 2025',
                citation: 'Coppedge, Michael, John Gerring, Carl Henrik Knutsen, Staffan I. Lindberg, Jan Teorell, David Altman, Fabio Angiolillo, Michael Bernhard, Agnes Cornell, M. Steven Fish, Linnea Fox, Lisa Gastaldi, Haakon Gjerløw, Adam Glynn, Ana Good God, Sandra Grahn, Allen Hicken, Katrin Kinzelbach, Joshua Krusell, Kyle L. Marquardt, Kelly McMann, Valeriya Mechkova, Juraj Medzihorsky, Natalia Natsika, Anja Neundorf, Pamela Paxton, Daniel Pemstein, Johannes von Römer, Brigitte Seim, Rachel Sigman, Svend-Erik Skaaning, Jeffrey Staton, Aksel Sundström, Marcus Tannenberg, Eitan Tzelgov, Yi-ting Wang, Felix Wiebrecht, Tore Wig, Steven Wilson and Daniel Ziblatt. 2025. "V-Dem [Country-Year/Country-Date] Dataset v15" Varieties of Democracy (V-Dem) Project. https://doi.org/10.23696/vdemds25'
            }],
            processing: 'Data filtered to show years from 1900 onwards for cleaner visualization. The World aggregate is a population-weighted average estimated by Our World in Data using UN WPP 2024 population data—only estimated when 70% of people in a region have data for the given year. OWID also expands time coverage by using historical entity data for non-sovereign territories (e.g., using Pakistan\'s data for Bangladesh from 1947-1970).'
        },
        'voter-turnout': {
            title: 'Voter Turnout: % eligible citizens voting in national elections',
            source: '[Add source]',
            lastUpdated: '-',
            nextUpdate: '-',
            dateRange: '-',
            unit: 'Percent',
            description: '[Add description]',
            interpretation: '[Add interpretation]',
            limitations: '[Add limitations]'
        },
        'trust-in-government': {
            title: 'Trust in National Government',
            source: 'OECD Government at a Glance Reports 2009-2025',
            lastUpdated: '2025',
            nextUpdate: '2027',
            dateRange: '2007-2024',
            unit: 'Percentage of population',
            description: 'Confidence in government is a key indicator of how satisfied people are with the actions of their government. This data is presented every 2 years for the OECD Government at a Glance Reports and collected by Gallup World Poll.<br><br>Before 2021, Gallup World Poll asked citizens of 34 OECD countries: "Do you have confidence in your national government? Yes/No". After 2021, OECD gathered the data itself, and the methodology was changed. They now ask citizens of 18 OECD countries: "How much do you trust your national government? 0-10".',
            interpretation: 'Strong downtrends in this metric, alongside negative trends in other metrics related to Governmental Disempowerment, could indicate that humans are losing influence over their government due to AI gaining influence. However, this metric is heavily influenced by factors other than AI. Thus this metric should be considered alongside other metrics related to Gradual Disempowerment.<br><br>There is an important discontinuity after 2021 as the survey methodology and list of surveyed countries change. Thus, comparisons between pre- and post-2021 are not meaningful.',
            limitations: '<ul><li>There is a methodological break in 2021—pre-2021 data (Gallup) and post-2021 data (OECD Trust Survey) are not directly comparable</li><li>The number of countries surveyed changed from 34 to 18 after 2021</li><li>Trust in government is influenced by many factors beyond AI, including economic conditions, political events, and media coverage</li></ul>',
            sources: [{
                name: 'Gallup World Poll',
                description: 'For the OECD Government at a Glance reports 2007-2021, data was collected by Gallup World Poll. Surveys were generally based on a representative sample of 1000 citizens in each country. More information about this survey is available at: www.gallup.com/home.aspx',
                retrievedFrom: 'https://www.oecd.org/en/publications/serials/government-at-a-glance_g1g123b5.html',
                retrievedOn: '30.12.2025',
                citation: 'OECD (2009-2023), Government at a Glance series, OECD Publishing, Paris. https://www.oecd.org/en/publications/serials/government-at-a-glance_g1g123b5.html'
            }, {
                name: 'OECD Trust Survey',
                description: 'The 2023 wave of the OECD Trust Survey is a nationally representative population survey collecting data from around 60000 respondents in 30 OECD countries to explore the drivers of public trust. Most countries were surveyed in October-November 2023. For an in-depth look at the survey method and implementation, please refer to the detailed methodological background paper at https://oe.cd/trust',
                retrievedFrom: 'https://www.oecd.org/en/publications/serials/government-at-a-glance_g1g123b5.html',
                retrievedOn: '30.12.2025',
                citation: 'OECD (2025), Government at a Glance series, OECD Publishing, Paris. https://www.oecd.org/en/publications/serials/government-at-a-glance_g1g123b5.html'
            }],
            processing: 'We only included countries that were present in all years of the survey and calculated the OECD average only from those countries.'
        },
        'satisfaction-services': {
            title: 'Satisfaction with Public Services',
            source: 'OECD Government at a Glance Reports 2009-2025',
            lastUpdated: '2025',
            nextUpdate: '2027',
            dateRange: '2007-2024',
            unit: 'Percentage of population',
            description: 'Satisfaction with public services measures citizen satisfaction with healthcare, education, and the judicial system in their country. Data was collected by Gallup World Poll (2007-2020) and the OECD Trust Survey (2021+).<br><br>Before 2021, respondents answered "satisfied/dissatisfied" questions about healthcare and education, and "yes/no" confidence questions about the judicial system. After 2021, respondents rated satisfaction or trust on a 0-10 scale, with scores of 6-10 classified as high/moderately high.',
            interpretation: 'If countries have less interest in investing in their population it would decrease spending and reduce quality of public services from which the population benefits. Thus these metrics can capture the alignment of governments with the interest of their population.<br><br>However, this metric is heavily influenced by factors other than AI. Thus this metric should be considered alongside other metrics related to Gradual Disempowerment.<br><br>There is an important discontinuity after 2021 as the survey methodology and list of surveyed countries change. Thus, comparisons between pre- and post-2021 are not meaningful.',
            limitations: '<ul><li>There is a methodological break in 2021—pre-2021 data (Gallup) and post-2021 data (OECD Trust Survey) are not directly comparable</li><li>The number of countries surveyed changed after 2021</li><li>Satisfaction with services is influenced by many factors beyond AI, including funding levels, political priorities, and economic conditions</li></ul>',
            sources: [{
                name: 'Gallup World Poll',
                description: 'For the OECD Government at a Glance reports 2007-2021, data was collected by Gallup World Poll. Surveys were generally based on a representative sample of 1000 citizens in each country. More information about this survey is available at: www.gallup.com/home.aspx',
                retrievedFrom: 'https://www.oecd.org/en/publications/serials/government-at-a-glance_g1g123b5.html',
                retrievedOn: '30.12.2025',
                citation: 'OECD (2009-2023), Government at a Glance series, OECD Publishing, Paris. https://www.oecd.org/en/publications/serials/government-at-a-glance_g1g123b5.html'
            }, {
                name: 'OECD Trust Survey',
                description: 'The 2023 wave of the OECD Trust Survey is a nationally representative population survey collecting data from around 60000 respondents in 30 OECD countries to explore the drivers of public trust. Most countries were surveyed in October-November 2023. For an in-depth look at the survey method and implementation, please refer to the detailed methodological background paper at https://oe.cd/trust',
                retrievedFrom: 'https://www.oecd.org/en/publications/serials/government-at-a-glance_g1g123b5.html',
                retrievedOn: '30.12.2025',
                citation: 'OECD (2025), Government at a Glance series, OECD Publishing, Paris. https://www.oecd.org/en/publications/serials/government-at-a-glance_g1g123b5.html'
            }],
            processing: 'We only included countries that were present in all years of the survey and calculated the OECD average only from those countries.'
        },
        'social-spending': {
            title: 'Amount of spending on education/healthcare/…',
            source: '[Add source]',
            lastUpdated: '-',
            nextUpdate: '-',
            dateRange: '-',
            unit: 'USD',
            description: '[Add description]',
            interpretation: '[Add interpretation]',
            limitations: '[Add limitations]'
        },
        'democracy-index': {
            title: 'Democracy Index',
            source: '[Add source]',
            lastUpdated: '-',
            nextUpdate: '-',
            dateRange: '-',
            unit: 'Index',
            description: '[Add description]',
            interpretation: '[Add interpretation]',
            limitations: '[Add limitations]'
        },
        // Cultural tab placeholders
        'ai-reddit-content': {
            title: 'Amount of reddit content written by AI',
            source: 'Originality.AI',
            lastUpdated: '-',
            nextUpdate: '-',
            dateRange: '-',
            unit: 'Percent',
            description: '[Add description]',
            interpretation: '[Add interpretation]',
            limitations: '[Add limitations]'
        },
        'chatbot-news': {
            title: 'Number of adults who get their news from chatbots',
            source: 'Pew Research Center',
            lastUpdated: '-',
            nextUpdate: '-',
            dateRange: '-',
            unit: 'Percent',
            description: '[Add description]',
            interpretation: '[Add interpretation]',
            limitations: '[Add limitations]'
        },
        'ai-web-traffic': {
            title: '% of web traffic done by AIs',
            source: 'Seraranking',
            lastUpdated: '-',
            nextUpdate: '-',
            dateRange: '-',
            unit: 'Percent',
            description: '[Add description]',
            interpretation: '[Add interpretation]',
            limitations: '[Add limitations]'
        },
        'ai-romantic-relationships': {
            title: '# of people in romantic relationships with AIs',
            source: '[Add source]',
            lastUpdated: '-',
            nextUpdate: '-',
            dateRange: '-',
            unit: 'Count',
            description: '[Add description]',
            interpretation: '[Add interpretation]',
            limitations: '[Add limitations]'
        },
        'ai-relationships-subreddit': {
            title: '# of people subscribed to r/AIRelationships',
            source: 'Reddit',
            lastUpdated: '-',
            nextUpdate: '-',
            dateRange: '-',
            unit: 'Count',
            description: '[Add description]',
            interpretation: '[Add interpretation]',
            limitations: '[Add limitations]'
        },
        'alien-ai-content': {
            title: '% of generated content deemed "unintelligible" or "alien" by humans',
            source: '[Add source]',
            lastUpdated: '-',
            nextUpdate: '-',
            dateRange: '-',
            unit: 'Percent',
            description: '[Add description]',
            interpretation: '[Add interpretation]',
            limitations: '[Add limitations]'
        },
        'ai-training-data': {
            title: '% of AI training data produced by AIs',
            source: '[Add source]',
            lastUpdated: '-',
            nextUpdate: '-',
            dateRange: '-',
            unit: 'Percent',
            description: '[Add description]',
            interpretation: '[Add interpretation]',
            limitations: '[Add limitations]'
        }
    };
    return modalDataMap[dataId];
}