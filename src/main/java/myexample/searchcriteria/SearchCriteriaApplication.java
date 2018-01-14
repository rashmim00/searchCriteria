package myexample.searchcriteria;

import javax.inject.Singleton;

import org.skife.jdbi.v2.DBI;

import io.dropwizard.Application;
import io.dropwizard.assets.AssetsBundle;
import io.dropwizard.setup.Bootstrap;
import io.dropwizard.setup.Environment;

public class SearchCriteriaApplication extends Application<SearchCriteriaConfiguration> {
    public static void main(String[] args) throws Exception {
        new SearchCriteriaApplication().run(args);
    }

    @Override
    public String getName() {
        return "search_criteria";
    }

    @Override
    public void initialize(Bootstrap<SearchCriteriaConfiguration> bootstrap) {
        // nothing to do yet
    	bootstrap.addBundle(new AssetsBundle("/assets/", "/", "index.html"));
    }

    @Override
	public void run(SearchCriteriaConfiguration configuration, Environment environment) {


	}
}