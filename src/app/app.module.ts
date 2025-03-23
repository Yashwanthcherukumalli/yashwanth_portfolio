import { NgModule } from "@angular/core";
import { AppRoutingMOdule } from "./app.routes";
import { PortfolioModule } from "./portfolio/portfolio.module";
import { HeaderComponent } from "./portfolio/header/header.component";
import { FooterComponent } from "./portfolio/footer/footer.component";


@NgModule({
  imports: [AppRoutingMOdule,PortfolioModule,HeaderComponent,FooterComponent]
})
export class AppModule {}
