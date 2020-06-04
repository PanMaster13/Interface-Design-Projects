<!DOCTYPE html>

<!-- data-ng-app="pigeon-chart" in the html is essential to inject ngPigeon-chart into the webpage-->
<html lang="en" data-ng-app="myapp" data-ng-cloak>
<head>
    <title>Demo: pigeon-chart</title>
	<!-- The includes.php file is required to include all necessary dependencies-->
    <?php
		include "pigeon-table/php/includes.php";
		include "pigeon-chart/php/includes.php";
	?>
    <script src="myapp.js"></script>
    <link rel="stylesheet" href="style.css"/>
</head> 

<body>
    <div class="bg-image">
        <section id="banner" class="sec text-center" >
            <div class="container">
                <div class="row">
                    <div class="col-md">
                        
                    </div>
                </div>
            </div>
        </section>
    </div>
<div class="container-fluid"> 
        

        <br/>
        <br/>
<div class="row sec">
        <h2>pigeon-table: Turn HTML + SQL into Interactive Table</h2>
        <div class="col-md-4">
<pre>
&lt;!DOCTYPE html&gt;
&lt;html lang="en" <span class="newCode">data-ng-app="pigeon-table"</span>&gt;
&lt;head&gt;
    &lt;title&gt;Demo: pigeon-table&lt;/title&gt;
    <span class="newCode">&lt;?php
        include "pigeon-table/php/includes.php"
    ?&gt;</span>
&lt;/head&gt; 
&lt;body&gt;
    
    <span class="newCode">&lt;pigeon-table query="SELECT * FROM actor"
                    editable="true"&gt;
    &lt;/pigeon-table&gt;</span>
    
&lt;/body&gt;
&lt;/html&gt;
</pre>
        </div> 
        <div class="col-md-8">
            <pigeon-table query="SELECT gender, COUNT(gender) 'Total' FROM actor GROUP BY gender ORDER BY gender DESC" editable="true" control="false"></pigeon-table>
        </div> 
</div>       
    <hr/>
<div class="row sec">  
        <h2>pigeon-table: Using INNER JOIN and Replace Column Title</h2>
        <div class="col-md-12">
<pre>
<span class="lead">&lt;<span class="newCode">pigeon-table query=</span>"SELECT m.title 'MovieTitle', m.relyear 'YearRelease', r.ratingcode 'RatingCode', 
                     r.shortdesc 'Description', m.tmdb_votes 'VoteCount'
                     FROM movie m
                     INNER JOIN rating r
                     ON m.ratingcode=r.ratingcode"&gt;
&lt;<span class="newCode">/pigeon-table</span>&gt;</span>
</pre>
        </div> 
        <div class="col-md-12">
            <pigeon-table query="SELECT m.title 'MovieTitle', m.relyear 'YearRelease', r.ratingcode 'RatingCode', 
                                 r.shortdesc 'Description', m.tmdb_votes 'VoteCount'
                                 FROM movie m
                                 INNER JOIN rating r
                                 ON m.ratingcode=r.ratingcode">
            </pigeon-table>
        </div> 
</div>
    <hr/>
<div class="row sec">
        <h2>pigeon-table: Using Aggregation Function</h2>
        <div class="col-md-12">
<pre>
<span class="lead">&lt;<span class="newCode">pigeon-table query=</span>"SELECT birthcountry, gender, count(*) 'TotalActor'
                        FROM actor
                        GROUP BY birthcountry, gender"
                <span class="newCode">control=</span>"false"&gt;
&lt;<span class="newCode">/pigeon-table</span>&gt;</span>
</pre>
        </div> 
        <div class="col-md-12">
            <pigeon-table query="SELECT birthcountry, gender, count(*) 'TotalActor'
                                    FROM actor
                                    GROUP BY birthcountry, gender"
                          control="false">
            </pigeon-table>
        </div> 
</div>
    <hr/> 
    <div class="bg-image">
        <section id="banner" class="sec text-center" >
            <div class="container">
                <div class="row">
                    <div class="col-md">
                        
                    </div>
                </div>
            </div>
        </section>
    </div>
<div class="row sec">  
        <h2>pigeon-chart: Turn HTML + SQL into Line Chart</h2>
        <div class="col-md-12">
<pre>
<span class="lead">&lt;<span class="newCode">pigeon-chart query=</span>"SELECT relyear, count(relyear)
                        FROM movie 
                        GROUP BY relyear"
                <span class="newCode">type=</span>"line"&gt;
&lt;<span class="newCode">/pigeon-chart</span>&gt;</span>
</pre>
        </div> 
        <div class="col-md-6">
            <pigeon-table query="SELECT relyear, count(relyear)
                                    FROM movie 
                                    GROUP BY relyear"
                          control="false">
            </pigeon-table>
        </div> 
        <div class="col-md-6">
            <pigeon-chart query="SELECT relyear, count(relyear)
                                    FROM movie 
                                    GROUP BY relyear"

                          type="line">
            </pigeon-chart>
        </div>  
</div>
    <hr/>
<div class="row sec">       
<h2>pigeon-chart: Plotting Multi-Series Line Chart</h2>
        <div class="col-md-12">
<pre>
<span class="lead">&lt;<span class="newCode">pigeon-chart query=</span>"SELECT relyear, min(runtime) 'Min. Duration', 
                                     avg(runtime) 'Avg. Duration', 
                                     max(runtime) 'Max. Duration' 
                     FROM movie
                     GROUP BY relyear"
                <span class="newCode">type=</span>"line"&gt;
&lt;<span class="newCode">/pigeon-chart</span>&gt;</span>
</pre>
        </div> 
        <div class="col-md-6">
            <pigeon-table query="SELECT relyear, min(runtime) 'Min. Duration' , 
                                    avg(runtime) 'Avg. Duration', 
                                    max(runtime) 'Max. Duration' 
                                    FROM movie
                                    GROUP BY relyear"
                          control="false">
            </pigeon-table>
        </div> 
        <div class="col-md-6">
            <pigeon-chart query="SELECT relyear, min(runtime) 'Min. Duration' , 
                                    avg(runtime) 'Avg. Duration', 
                                    max(runtime) 'Max. Duration' 
                                    FROM movie
                                    GROUP BY relyear"

                          type="line">
            </pigeon-chart>
        </div>         
</div> 
    <hr/>
<div class="row sec">       
<h2>pigeon-chart: Plotting Multi-Series Column Chart with additional Pigeon Attributes</h2>
        <div class="col-md-12">
<pre>
<span class="lead">&lt;<span class="newCode">pigeon-chart query=</span>"SELECT ratingcode, min(runtime), avg(runtime), max(runtime)
                     FROM movie 
                     GROUP BY ratingcode"
                <span class="newCode">type=</span>"column"
                <span class="newCode">title=</span>"Comparison of Movie Runtime by Rating Code"
                <span class="newCode">subtitle=</span>"Min, Average & Max"
                <span class="newCode">axisx-title=</span>"Rating"
                <span class="newCode">axisy-title=</span>"Runtime"
                <span class="newCode">show-legend=</span>"true"&gt;
&lt;<span class="newCode">/pigeon-chart</span>&gt;</span>
</pre>
        </div> 
        <div class="col-md-6">
            <pigeon-table query="SELECT ratingcode, min(runtime), avg(runtime), max(runtime)
                                 FROM movie GROUP BY ratingcode"
                          control="false">
            </pigeon-table>
        </div> 
        <div class="col-md-6">
            <pigeon-chart query="SELECT ratingcode, min(runtime), avg(runtime), max(runtime)
                                 FROM movie GROUP BY ratingcode"
                          type="column"
                          title="Comparison of Movie Runtime by Rating Code"
                          subtitle="Min, Average & Max"
                          axisx-title="Rating"
                          axisy-title="Runtime"
                          show-legend="true">
            </pigeon-chart>
        </div>         
</div> 		
    <hr/>
<div class="row sec">       
<h2>pigeon-chart: Plotting Pie Chart</h2>
        <div class="col-md-12">
<pre>
<span class="lead">&lt;<span class="newCode">pigeon-chart query=</span>"SELECT ratingcode, count(ratingcode)
                     FROM movie
                     GROUP BY ratingcode"
                <span class="newCode">type=</span>"pie"
                <span class="newCode">title=</span>"Total Number of Movie by Rating"
                <span class="newCode">axisy-title=</span>"Movie Count"
                <span class="newCode">show-legend=</span>"true"
                <span class="newCode">data-data-label=</span>"true"&gt;
&lt;<span class="newCode">/pigeon-chart</span>&gt;</span>
</pre>
        </div> 
        <div class="col-md-6">
            <pigeon-table query="SELECT ratingcode, count(ratingcode)
                                 FROM movie
                                 GROUP BY ratingcode"
                          control="false">
            </pigeon-table>
        </div> 
        <div class="col-md-6">
            <pigeon-chart query="SELECT ratingcode, count(ratingcode)
                                 FROM movie
                                 GROUP BY ratingcode"
                          title="Total Number of Movie by Rating"
                          type="pie"
                          axisy-title="Movie Count"
                          show-legend="true"
                          data-data-label="true">

            </pigeon-chart>
        </div>         
</div> 		
    <footer class="text-center">
            <p>
                <a href="http://www.swinburne.edu.my" target="_blank">Swinburne University</a> | 
                <a href="https://github.com/ngPigeon" target="_blank">Github</a>
            </p>
            <p>
                ngPigeon @ 2018
            </p>
            <p>
                <i>by &lt;Developers&gt; for &lt;/Developers&gt;</i>
            </p>
		</footer>
</div>
            
</body>
</html>

