---
title: "Cyclistic Case Study – Member vs Casual Riders Analysis"
date: "2025-09-01"
stack: ["SQL (BigQuery)", "R (tidyverse, ggplot2)", "Tableau", "Python"]
slug: "cyclistic-case-study"
featuredImage: "../static/images/cyclistic-case-study.jpg" 
---

## Executive Summary
[cite_start]I analyzed **5.64 million Cyclistic trips** from September 2024 to August 2025 to identify differences in usage between annual members and casual riders[cite: 1, 2]. [cite_start]The primary goal was to uncover patterns in ridership behavior to provide actionable recommendations for **increasing annual memberships**[cite: 3, 4].

## Key Insights

### 1. Rider Distribution & Trip Duration
* [cite_start]**Rider Split:** Members accounted for **63.25%** (approx. 3.57 million) of total trips, while casual riders made up **36.75%** (approx. 2.07 million)[cite: 18, 19].
* [cite_start]**Trip Length:** Casual riders average **19.4 minutes** per trip, significantly longer than members' **11.8 minutes**[cite: 22].
* [cite_start]**Long Trips:** **27.0%** of casual trips exceeded 20 minutes, compared to only **13.6%** for members[cite: 23].

### 2. Weekday vs Weekend Trends
* [cite_start]**Leisure Focus:** **16.5%** of casual trips occur on weekends between 10:00 and 17:00, indicating a strong link to leisure and tourist activity[cite: 25].
* [cite_start]**Commuter Focus:** Members predominantly ride during **weekdays**, especially during peak hours, suggesting they are mostly commuters[cite: 26].

### 3. Seasonal Trends
* [cite_start]**Peak Season:** Ridership peaked in **September** (474K member trips, 345K casual trips)[cite: 31].
* [cite_start]**Seasonal Drop:** Ridership drops sharply after September and continues through the winter months, reflecting reduced demand in colder weather[cite: 32].

## Data and Tools Used

| Category | Tools & Details |
| :--- | :--- |
| **Data Source** | [cite_start]Divvy trip data from September 2024 to August 2025[cite: 5]. [cite_start]**5,640,202** trips were analyzed[cite: 1]. |
| **Cleaning & Processing** | [cite_start]**Python (Colab)** for bulk loading, **BigQuery (SQL)** for cleaning, aggregation, and snapshot creation[cite: 8]. |
| **Analysis & Visualization** | [cite_start]**R (tidyverse, ggplot2)** for exploratory analysis, and **Tableau Desktop** for the interactive dashboard and storytelling[cite: 9]. |
| **Cleaning Audit** | [cite_start]Invalid/null timestamps, negative durations, and long trips (>120 min) were handled; features like weekday, month, and season were derived[cite: 11, 12, 13]. |

## Key Recommendations (Actionable Steps)

1.  [cite_start]**Convert Casuals to Members:** Target frequent casual riders (e.g., $\ge3$ rides/month or $\ge60$ minutes/month) with a **Weekend Pass upgrade discount** valid for 30 days[cite: 35, 34].
2.  [cite_start]**Optimize Fleet:** Increase the supply of **electric bikes** in high-demand areas (Electric bikes represent 59.4% of total trips)[cite: 36, 29].
3.  [cite_start]**Seasonal Promotions:** Launch major campaigns in **September** (peak season) and offer special incentives during **winter** to mitigate the seasonal drop in ridership[cite: 38, 39].

## Project Deliverables & Links

| Deliverable | Description | Link Placeholder |
| :--- | :--- | :--- |
| **PDF Report** | The complete 10-page analysis, findings, and recommendations. | [Link to PDF Report] |
| **Tableau Dashboard** | Interactive dashboard for stakeholder review. | [Link to Embedded Tableau Dashboard] |
| **Processed Dataset** | [cite_start]The cleaned and feature-engineered Parquet/CSV dataset used for analysis[cite: 5]. | [Link to Processed Dataset Download] |
| **Original Dataset** | [cite_start]Link to the official raw data source (Divvy portal)[cite: 6]. | [Link to Original Dataset] |
