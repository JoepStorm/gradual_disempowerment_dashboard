const CHARTS_DATA = {
  "overview": {
    "hero": {
      "title": "AI Empowerment over Time (2010-2035)",
      "explainer": "This chart aggregates all our disempowerment-related metrics into a single index that shows the overall disempowerment of humans.",
      "iframe": "generated_html/gradual_disempowerment.html",
      "modalId": "ai-empowerment"
    },
    "sections": [
      {
        "title": "Total Disempowerment (aggregated)",
        "explainer": "[Add section explainer about total disempowerment metrics]",
        "charts": [
          {
            "title": "World Map View over time (fake data)",
            "explainer": "[Add explainer about how this metric relates to Gradual Disempowerment]",
            "iframe": "generated_html/world_disempowerment.html",
            "modalId": "world-map",
            "fullWidth": true
          },
          {
            "title": "Country Trends (fake data)",
            "explainer": "[Add explainer about how this metric relates to Gradual Disempowerment]",
            "iframe": "generated_html/country_lines.html",
            "modalId": "country-trends",
            "fullWidth": true
          }
        ]
      },
      {
        "title": "Economic Disempowerment (aggregated)",
        "explainer": "[Add section explainer about economic disempowerment metrics]",
        "charts": [
          {
            "title": "Economic Disempowerment Index",
            "explainer": "[Add explainer about how this metric relates to Gradual Disempowerment]",
            "placeholder": true,
            "modalId": "economic-index"
          }
        ]
      },
      {
        "title": "Governmental Disempowerment (aggregated)",
        "explainer": "[Add section explainer about governmental disempowerment metrics]",
        "charts": [
          {
            "title": "Governmental Disempowerment Index",
            "explainer": "[Add explainer about how this metric relates to Gradual Disempowerment]",
            "placeholder": true,
            "modalId": "governmental-index"
          }
        ]
      },
      {
        "title": "Cultural Disempowerment (aggregated)",
        "explainer": "[Add section explainer about cultural disempowerment metrics]",
        "charts": [
          {
            "title": "Cultural Disempowerment Index",
            "explainer": "[Add explainer about how this metric relates to Gradual Disempowerment]",
            "placeholder": true,
            "modalId": "cultural-index"
          }
        ]
      }
    ]
  },
  "economic": {
    "tabExplainer": "The economy currently serves human interests because it depends on human labor and consumption. As AI replaces workers, takes over business decisions and drives demand, this alignment may erode — markets could increasingly optimize for AI-driven activities rather than human needs. These metrics track how much economic influence remains in human hands.",
    "sections": [
      {
        "title": "Influence of Human Labor",
        "explainer": "[Add section explainer about how the influence of human labor relates to economic disempowerment]",
        "charts": [
          {
            "title": "Labor share of GDP in the US",
            "explainer": "As human labor becomes a smaller part of the economy due to AI automation, people will lose the power over economic decisions and outputs.",
            "iframe": "generated_html/labor_share_gdp.html",
            "modalId": "labor-share-gdp"
          },
          {
            "title": "Total % of unemployment [Worldbank]",
            "explainer": "[Add explainer about how this metric relates to Gradual Disempowerment]",
            "iframe": "generated_html/unemployment_rate.html",
            "modalId": "unemployment-rate"
          },
          {
            "title": "Median wage growth vs. productivity growth [OECD]",
            "explainer": "[Add explainer about how this metric relates to Gradual Disempowerment]",
            "placeholder": true,
            "modalId": "wage-productivity"
          },
          {
            "title": "# of AI-driven layoffs",
            "explainer": "[Add explainer about how this metric relates to Gradual Disempowerment]",
            "placeholder": true,
            "modalId": "ai-layoffs"
          }
        ]
      },
      {
        "title": "Influence of Human Consumption",
        "explainer": "Markets produce what buyers want. Today, human consumers drive most final demand—companies ultimately exist to sell things to people. But if AI systems increasingly control purchasing decisions (through B2B automation, AI procurement agents, or algorithmic spending), human preferences become less central to what gets produced. An economy optimizing for AI customers rather than human ones would be a key sign of disempowerment.",
        "charts": [
          {
            "title": "% of gross domestic product for Personal consumption expenditures [World Bank]",
            "explainer": "Personal consumption as share of GDP measures how much of economic output goes directly to satisfying human wants. A sustained decline could indicate that markets are shifting toward serving non-human demand—though short-term fluctuations often reflect business cycles rather than structural change.",
            "iframe": "generated_html/personal_consumption_share.html",
            "modalId": "personal-consumption"
          }
        ]
      },
      {
        "title": "AI Decision Making in the Economy",
        "explainer": "[Add section explainer about how AI decision-making in businesses relates to economic disempowerment]",
        "charts": [
          {
            "title": "Share of Companies Using Artificial Intelligence [McKinsey]",
            "explainer": "Shows the percentage of organizations reporting having adopted AI. The global trend (All geographies) shows rapid acceleration in 2024.",
            "iframe": "generated_html/economy_organizations_adopted_ai.html",
            "iframeHeight": "450px",
            "modalId": "companies-using-ai"
          },
          {
            "title": "Survey on number of business functions where AI is used [McKinsey]",
            "explainer": "[Add explainer about how this metric relates to Gradual Disempowerment]",
            "placeholder": true,
            "modalId": "ai-business-functions"
          },
          {
            "title": "Fraction of business decisions/spending made by AIs",
            "explainer": "[Add explainer about how this metric relates to Gradual Disempowerment]",
            "placeholder": true,
            "modalId": "ai-business-decisions"
          }
        ]
      },
      {
        "title": "AI Economy Impact",
        "explainer": "[Add section explainer about how AI's economic impact relates to gradual disempowerment]",
        "charts": [
          {
            "title": "AI company market cap as % of S&P 500",
            "explainer": "[Add explainer about how this metric relates to Gradual Disempowerment]",
            "placeholder": true,
            "modalId": "ai-market-cap"
          },
          {
            "title": "% of market growth caused by AI companies",
            "explainer": "[Add explainer about how this metric relates to Gradual Disempowerment]",
            "placeholder": true,
            "modalId": "ai-market-growth"
          },
          {
            "title": "Investment in AI companies/startups [State of AI Report]",
            "explainer": "[Add explainer about how this metric relates to Gradual Disempowerment]",
            "placeholder": true,
            "modalId": "ai-investment"
          },
          {
            "title": "Datacenter / AI energy usage as % of national/industrial energy",
            "explainer": "[Add explainer about how this metric relates to Gradual Disempowerment]",
            "placeholder": true,
            "modalId": "ai-energy-usage"
          }
        ]
      },
      {
        "title": "Productivity Improvements from AI",
        "explainer": "[Add section explainer about how AI-driven productivity gains relate to economic disempowerment]",
        "charts": [
          {
            "title": "Growth of AI-heavy industries vs AI-light industries",
            "explainer": "[Add explainer about how this metric relates to Gradual Disempowerment]",
            "placeholder": true,
            "modalId": "ai-industry-growth"
          },
          {
            "title": "Output per employee. Compare AI-intensive industries vs others [EuroStat]",
            "explainer": "[Add explainer about how this metric relates to Gradual Disempowerment]",
            "placeholder": true,
            "modalId": "output-per-employee"
          }
        ]
      }
    ]
  },
  "governmental": {
    "tabExplainer": "[Add governmental tab explainer about how governmental factors contribute to Gradual Disempowerment]",
    "sections": [
      {
        "title": "Reliance of the state financing on humans",
        "explainer": "[Add section explainer about how state financing reliance on humans relates to governmental disempowerment]",
        "charts": [
          {
            "title": "% of total government revenue from personal income taxes vs. corporate or AI-sector taxes",
            "explainer": "[Add explainer about how this metric relates to Gradual Disempowerment]",
            "placeholder": true,
            "modalId": "govt-tax-revenue"
          },
          {
            "title": "Share of national income from AI-heavy sectors",
            "explainer": "[Add explainer about how this metric relates to Gradual Disempowerment]",
            "placeholder": true,
            "modalId": "ai-sector-income"
          }
        ]
      },
      {
        "title": "Use of AI vs Human Labor in Government",
        "explainer": "[Add section explainer about how AI adoption in government relates to governmental disempowerment]",
        "charts": [
          {
            "title": "Use of AI for surveillance purposes [AI Global Surveillance Index]",
            "explainer": "[Add explainer about how this metric relates to Gradual Disempowerment]",
            "placeholder": true,
            "modalId": "ai-surveillance"
          },
          {
            "title": "Amount of Government spending on procurement to AI Companies [AI Index]",
            "explainer": "Government spending on AI reflects how governments are increasingly relying on AI systems for public services and decision-making.",
            "iframe": "generated_html/public_investment.html",
            "iframeHeight": "450px",
            "iframeWidth": "100%",
            "modalId": "govt-ai-spending"
          },
          {
            "title": "Length/Complexity of legislation",
            "explainer": "[Add explainer about how this metric relates to Gradual Disempowerment]",
            "placeholder": true,
            "modalId": "legislation-complexity"
          }
        ]
      },
      {
        "title": "Human influence over governments",
        "explainer": "[Add section explainer about how human influence over government relates to governmental disempowerment]",
        "charts": [
          {
            "title": "Democracy Index worldwide [OWID]",
  "explainer": "The Electoral Democracy Index measures to what extent political leaders are elected under comprehensive voting rights in free and fair elections, and can exercise their political power subject to the rule of law. Declining democracy worldwide could make populations more vulnerable to AI-driven authoritarianism.",
            "iframe": "generated_html/democracy_index.html",
            "modalId": "democracy-index-owid"
          },
          {
            "title": "Voter Turnout: % eligible citizens voting in national elections",
            "explainer": "[Add explainer about how this metric relates to Gradual Disempowerment]",
            "placeholder": true,
            "modalId": "voter-turnout"
          }
        ]
      },
      {
        "title": "Misalignment of Governments",
        "explainer": "[Add section explainer about how governmental misalignment relates to governmental disempowerment]",
        "charts": [
          {
            "title": "Satisfaction with Public Services",
            "explainer": "Share of citizens satisfied with healthcare, education, and judicial systems. Declining satisfaction may indicate government services failing to meet citizen needs and expectations.",
            "iframe": "generated_html/satisfaction_with_government.html",
            "modalId": "satisfaction-services"
          },
          {
            "title": "Trust in National Government",
            "explainer": "Share of citizens expressing confidence/trust in national government. Low trust may indicate a disconnect between government actions and citizen preferences, while methodology changes in 2022 reflect new measurement approaches.",
            "iframe": "generated_html/trust_in_government.html",
            "modalId": "trust-in-government"
          }
        ]
      }
    ]
  },
  "cultural": {
    "tabExplainer": "[Add cultural tab explainer about how cultural factors contribute to Gradual Disempowerment]",
    "sections": [
      {
        "title": "Cultural Production",
        "explainer": "[Add section explainer about how AI-generated cultural content relates to cultural disempowerment]",
        "charts": [
          {
            "title": "Amount of reddit content written by AI [Originality.AI]",
            "explainer": "[Add explainer about how this metric relates to Gradual Disempowerment]",
            "placeholder": true,
            "modalId": "ai-reddit-content"
          }
        ]
      },
      {
        "title": "AI-mediated Consumption",
        "explainer": "[Add section explainer about how AI-mediated content consumption relates to cultural disempowerment]",
        "charts": [
          {
            "title": "Number of adults who get their news from chatbots [Pewresearch]",
            "explainer": "[Add explainer about how this metric relates to Gradual Disempowerment]",
            "iframe": "generated_html/world_news_media.html",
            "modalId": "chatbot-news",
            "fullWidth": true
          },
          {
            "title": "% of web traffic done by AIs [Seraranking]",
            "explainer": "[Add explainer about how this metric relates to Gradual Disempowerment]",
            "placeholder": true,
            "modalId": "ai-web-traffic"
          }
        ]
      },
      {
        "title": "Human-AI relationships",
        "explainer": "[Add section explainer about how human-AI relationships relate to cultural disempowerment]",
        "charts": [
          {
            "title": "# of people in romantic relationships with AIs",
            "explainer": "[Add explainer about how this metric relates to Gradual Disempowerment]",
            "placeholder": true,
            "modalId": "ai-romantic-relationships"
          },
          {
            "title": "# of people subscribed to r/AIRelationships",
            "explainer": "[Add explainer about how this metric relates to Gradual Disempowerment]",
            "placeholder": true,
            "modalId": "ai-relationships-subreddit"
          }
        ]
      },
      {
        "title": "Inter AI Culture",
        "explainer": "[Add section explainer about how inter-AI culture and AI-to-AI interactions relate to cultural disempowerment]",
        "charts": [
          {
            "title": "% of generated content deemed \"unintelligible\" or \"alien\" by humans",
            "explainer": "[Add explainer about how this metric relates to Gradual Disempowerment]",
            "placeholder": true,
            "modalId": "alien-ai-content"
          },
          {
            "title": "% of AI training data produced by AIs",
            "explainer": "[Add explainer about how this metric relates to Gradual Disempowerment]",
            "placeholder": true,
            "modalId": "ai-training-data"
          }
        ]
      }
    ]
  }
  };