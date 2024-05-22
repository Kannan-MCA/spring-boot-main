package com.example.librarymanagement.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity(securedEnabled = true)
public class SecurityConfiguration {

	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
		http.authorizeHttpRequests(authz -> authz.requestMatchers("/auth/**").permitAll().requestMatchers("/**")
				.permitAll().anyRequest().authenticated());
		http.formLogin(authz -> authz.loginPage("/").permitAll().loginProcessingUrl("/"));
		http.logout(
				authz -> authz.deleteCookies("JSESSIONID").logoutRequestMatcher(new AntPathRequestMatcher("/logout")));
		http.csrf(AbstractHttpConfigurer::disable);

		return http.build();
	}

}