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
            title: 'Amount of Government Spending on AI',
            source: 'AI Index',
            lastUpdated: 'April 2025',
            nextUpdate: 'April 2026',
            dateRange: '2013-2023',
            unit: 'Millions of USD',
            description: 'This metrics indicate the spending of the US and European countries on AI. This only includes public tenders and contracts, but not grants. In this way, it excludes much R&D spending and instead focuses on AI use by the government. It was gathered for the AI Index 2025 by using NLP techniques to identify public tenders and contracts related to AI.',
            interpretation: 'If this number goes up, esp if the number of government employees goes down, it might indicate that government functions rely more on AI, thus decreasing human influence.',
            limitations: 'This metric does not directly measure the extent of AI use and human disempowerment in government bureaucracies. Additionally, some R&D funding goes through contracts, such that this number is only an upper bound of Government spending on AI procurement. Finally, this data should not be used for inter-country comparisons.',
            sources: [{
                name: 'AI Index Report 2025',
                description: 'The AI Index Report is a yearly report by the Stanford Institute for Human-Centered AI (HAI). It gathers and presents data related to AI Research, Economic Impacts, AI Policy, and other topics. To gather data about AI-related government spending the "AI Index leveraged natural language processing (NLP) techniques to analyze public tenders and contracts and to identify AI-related government spending in countries across the world. Examining tenders provides a more direct measure of investment trends and offers insight into how governments allocate resources over time."',
                retrievedFrom: 'https://drive.google.com/drive/folders/1E6KMtGSklh0PbyFwIQjmO9sY5twhKWnQ',
                retrievedOn: '4.12.2025',
                citation: 'Nestor Maslej, Loredana Fattorini, Raymond Perrault, Yolanda Gil, Vanessa Parli, Njenga Kariuki, Emily Capstick, Anka Reuel, Erik Brynjolfsson, John Etchemendy, Katrina Ligett, Terah Lyons, James Manyika, Juan Carlos Niebles, Yoav Shoham, Russell Wald, Toby Walsh, Armin Hamrah, Lapo Santarlasci, Julia Betts Lotufo, Alexandra Rome, Andrew Shi, Sukrut Oak. "The AI Index 2025 Annual Report," AI Index Steering Committee, Institute for Human-Centered AI, Stanford University, Stanford, CA, April 2025. https://doi.org/10.48550/arXiv.2504.07139'
            }],
            processing: '-'
        },
        'human-dependent-taxes': {
            title: 'Human-Dependent Taxes',
            source: '[Add source]',
            lastUpdated: '-',
            nextUpdate: '-',
            dateRange: '-',
            unit: 'Percent of GDP',
            description: 'This metric shows taxes that directly depend on human activity: Labour taxes (SSC + individual income taxes), Consumption taxes (VAT/sales taxes + excises), and Total human-dependent taxes. These represent government revenue streams tied to human employment, wages, and purchasing behavior.',
            interpretation: '[Add interpretation]',
            limitations: '[Add limitations]'
        },
        'govt-employees-per-capita': {
            title: 'Human Employees in Government',
            source: '[Add source]',
            lastUpdated: '-',
            nextUpdate: '-',
            dateRange: '-',
            unit: 'Employees per working age population',
            description: 'Government employees per working age population measures how many people are employed in general government relative to the working age population. This metric helps track whether governments maintain human capacity for governance.',
            interpretation: '[Add interpretation]',
            limitations: '[Add limitations]'
        },
        'legislation-complexity': {
            title: 'Length/Complexity of legislation',
            source: 'Global Corruption Observatory - LEGDAT Dataset',
            lastUpdated: 'October 2024',
            nextUpdate: '-',
            dateRange: '2000-2023',
            unit: 'Characters (law size), Count (modified laws, omnibus bills)',
            description: 'As AI becomes more involved in drafting legislation, laws may grow longer and more complex since they no longer need to be constrained by human cognitive limits. This could make it increasingly difficult for citizens, journalists, and even legislators themselves to understand and scrutinize new laws - effectively disempowering people in the democratic process. This indicator tracks legislative complexity metrics that would reveal such a trend.<br><br>This indicator combines three legislative complexity metrics averaged across 14 countries: (1) average character count of enacted laws (length of legislation), (2) average number of existing laws modified by each new bill (# modified laws), and (3) average number of omnibus bills (legislation covering multiple unrelated subjects) per year.',
            interpretation: 'Higher values suggest legislation is becoming more complex and interconnected. Increasing law size means more text for citizens to read and comprehend. More modified laws per bill indicates greater legal interdependency. More omnibus bills suggests bundling of unrelated provisions, making it harder to scrutinize individual policies. Increases in these values might be especially concerning if it is known that AI is heavily used in the legislative process.',
            limitations: '<ul><li>There has been a general trend (independent of AI) towards higher complexity in legislation</li><li>Data coverage is incomplete across the 14 countries and doesn\'t cover most countries in the world</li><li>Complexity is multi-dimensional and the presented metrics don\'t perfectly measure it</li><li>We did not include measures for the complexity of the legislative process such as the number of amendments, the amount of committees involved or the number of legislative stages</li></ul>',
            sources: [{
                name: 'LEGDAT Dataset',
                description: 'Global dataset on legislative processes, outputs, and outcomes covering 16 countries and 270,000+ bills/laws. Collected by the Global Corruption Observatory. See this paper for details: <a href="https://www.researchgate.net/publication/384816657_The_LEGDAT_Dataset_A_Global_Dataset_on_Legislative_Processes_Outputs_and_Outcomes" target="_blank" rel="noopener noreferrer">Benoît et al. (2024)</a>. Covered nations include: Australia, Bulgaria, Brazil, Chile, Colombia, Germany, Hungary, India, Poland, Portugal, Russia, South Africa, United Kingdom, United States.',
                retrievedFrom: 'https://globalcorruptionobservatory.com/downloads/legislative',
                retrievedOn: '9.12.2025',
                citation: 'Benoît, Cyril, Dominik Brenner, and Mihaly Fazekas. "The LEGDAT Dataset: A Global Dataset on Legislative Processes, Outputs and Outcomes."'
            }],
            processing: 'Raw bill-level data from 16 countries was aggregated by country and year. We filtered to years 2000-2023, as previous years, as well as 2024, have too few countries reporting data. Countries with excessive missing data were excluded per metric (France, Jordan for modified laws; Hungary for law size). Final values are unweighted arithmetic means across all included countries for each year.'
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
        'political-efficacy': {
            title: 'Political Efficacy (OECD Average)',
            source: 'OECD - Government at a Glance',
            lastUpdated: '2025',
            nextUpdate: '2027',
            dateRange: '2014-2023',
            unit: 'Percent of population',
            description: 'This metric tracks citizens\' perceptions of their ability to influence government through multiple survey questions. Data from 2014-2018 comes from the European Social Survey (ESS), covering primarily European OECD countries. Data from 2021 onwards comes from the OECD Trust Survey. The questions asked to interviewees were:<br><br><b>Confidence to Participate in Politics:</b> "How confident are you in your own ability to participate in politics?" Share of people answering "quite confident", "very confident", or "completely confident" (ESS) or 6-10 (OECD Trust Survey, 0-10 scale).<br><br><b>Have a Say in Government:</b> "How much would you say the political system in [country] allows people like you to have a say in what the government does?" Share of people answering "some", "a lot", or "a great deal" (ESS, 1-5 scale) or 6-10 (on a 0-10 scale).<br><br><b>Responsiveness of policy to public feedback:</b> "If over half of the people in your country clearly expressed a view against a national policy, how likely do you think it is that it would be changed?" Share of people answering 6-10 on a 0-10 scale (OECD Trust Survey only).<br><br><b>Satisfaction with Democracy:</b> "On the whole, how satisfied are you with the way democracy works in [country]?" Share of people answering 5-10 on a 0-10 scale.',
            interpretation: 'Declining political efficacy could indicate that citizens feel increasingly disconnected from government decision-making—a key concern for Gradual Disempowerment, where AI-driven governance might reduce the willingness of governments to be responsive to public demands. Low political efficacy is associated with political cynicism, lower voter turnout, and perceptions that the system serves narrow interests rather than the public.<br><br>However, political efficacy is influenced by many factors beyond AI: political polarization, economic conditions, trust scandals, and media environment all play major roles. This metric should be interpreted alongside other government-related indicators.',
            limitations: '<ul><li><b>Major methodology break in 2021:</b> ESS (pre-2021) and OECD Trust Survey (post-2021) use different question wordings, response scales, and country samples. Direct comparisons across this break are not meaningful.</li><li>Different metrics are available in different years—"have a say" was discontinued after 2021, while "responsiveness" only appears from 2021.</li><li>This measures perceptions of efficacy, not actual responsiveness of government to citizen input.</li><li>OECD averages are unweighted, giving equal influence to small and large countries.</li><li>Wide country variation exists (e.g., Switzerland ~74% vs Italy ~10-15% on "have a say")—aggregate trends may mask divergent national patterns.</li></ul>',
            sources: [{
                name: 'OECD Trust Survey',
                description: 'The OECD Trust Survey is a nationally representative population survey collecting data from approximately 2,000 respondents per country across 22-30 OECD countries. The first wave was conducted November-December 2021, with subsequent waves in 2023. All questions use 0-10 scales, aggregated as: 0-4 = low/unlikely; 5 = neutral; 6-10 = high/likely. For detailed methodology, see https://oe.cd/trust.',
                retrievedFrom: 'https://www.oecd.org/en/publications/serials/government-at-a-glance_g1g123b5.html',
                retrievedOn: '30.12.2025',
                citation: 'OECD (2025), Government at a Glance series, OECD Publishing, Paris. https://www.oecd.org/en/publications/serials/government-at-a-glance_g1g123b5.html'
            }, {
                name: 'European Social Survey (ESS)',
                description: 'The ESS is an academically-driven cross-national survey established in 2001. Every two years, face-to-face interviews are conducted with representative samples (minimum 1,500 per country, 800 for countries under 2 million population). The 2019 and 2021 Government at a Glance reports use ESS data from rounds 7-8 (2014-2018). Response options for "have a say" are on a 1-5 scale ("not at all" to "a great deal"); for confidence to participate, responses range from "not at all confident" to "completely confident."',
                retrievedFrom: 'https://www.oecd.org/en/publications/serials/government-at-a-glance_g1g123b5.html',
                retrievedOn: '4.12.2025',
                citation: 'OECD (2019, 2021), Government at a Glance series, OECD Publishing, Paris.'
            }],
            processing: '-'
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
            title: 'Share of popoulation who obtain news from chatbots',
            source: 'Reuters Institute',
            lastUpdated: 'June 2025',
            nextUpdate: 'June 20266',
            dateRange: '2025',
            unit: 'Percent of population',
            description: 'The data was obtained from a survey by YouGov in January and February of 2025, commissioned by the Reuters Institute for the Study of Journalism to understand how news is being consumed in a range of countries. Surveys were done online, and are therefore based on people’s self-reported behaviour. For each country, at least 2000 samples were included. As much as possible, samples were assembled using nationally representative quotas for age, gender, religion, and education. Political quotes based on vote choices in the last national election were applied in around a third of the markets, including the United States, Australia, and much of Western Europe.',
            interpretation: '<ul><li>The sources of media one consumes can play a large role in one\'s perception. An increased reliance on chatbots for news can give significant power to those chatbots. Additionally, more competition for journalists can erode traditional news-sources.</li><li>Chatbots’ responses can be largely steered by the companies that create them, also increasing their power to influence the general opinion. At the same time, chatbots have the potential to give more nuanced views than if one only consumes news from a single source. </li></ul>',
            limitations: '<ul><li>The full list of assumptions is presented in the full report. Three main assumptions are summarized here.</li><li>Data from India, Kenya, Nigeria and South Africa are representative of English-speakers, and not the national population, because it is not possible to reach other groups in a representative way using an online survey.</li><li>Online samples tend to under-represent the news consumption habits of people who are older and less affluent, meaning online use, such as chatbots, is typically over-represented. In this sense, it is better to think of results as representative of the online population.</li><li>Surveys capture people’s self-reported behaviour, which does not always reflect people’s actual behaviour due to biases and imperfect recall. </li></ul>',
            sources: [{
                name: 'Reuters Institute Digital News Report 2025',
                description: 'The data was obtained from a survey by YouGov, commissioned by the Reuters Institute for the Study of Journalism to understand how news is being consumed in a range of countries. Self-reported news sources through an online questionnaire, conducted from the middle of January to the end of February ',
                retrievedFrom: 'https://reutersinstitute.politics.ox.ac.uk/sites/default/files/2025-06/Digital_News-Report_2025.pdf',
                retrievedOn: '15.10.2025',
                citation: 'Newman, Nic, et al. Digital news report 2025. Reuters Institute for the study of Journalism, 2025.'
            }],
            processing: 'No processing was performed.'
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