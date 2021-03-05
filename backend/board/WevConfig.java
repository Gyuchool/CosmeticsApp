package cosmetics.demo;

import org.springframework.context.annotation.Configuration;
import org.springframework.format.FormatterRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WevConfig implements WebMvcConfigurer {
    public void addFormatters(FormatterRegistry registry){
        registry.addConverter(new StringToEnumConverter());
    }
}
