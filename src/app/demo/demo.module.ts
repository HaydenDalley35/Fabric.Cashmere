import { VerticalTabsDemoComponent } from 'app/lib/vertical-tabs/vertical-tabs-demo/vertical-tabs-demo.component';
import { VerticalTabsModule } from 'app/lib/vertical-tabs/vertical-tabs.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'app/lib/button/button.module';
import { DemoComponent } from 'app/demo/demo.component';
import { SideNavComponent } from 'app/demo/side-nav/side-nav.component';
import { ButtonDemoComponent } from 'app/lib/button/button-demo/button-demo.component';
import { ColorDemoComponent } from 'app/lib/color-demo/color-demo.component';
import { TableDemoComponent } from 'app/lib/table-demo/table-demo.component';
import { SwatchDemoComponent } from 'app/lib/color-demo/swatch-demo.component';
import { routes } from './demo-routes';
import { CheckboxDemoComponent } from 'app/lib/checkbox/checkbox-demo/checkbox-demo.component';
import { CheckboxModule } from 'app/lib/checkbox/checkbox.module';
import { CheckboxComponent } from 'app/lib/checkbox/checkbox.component';
import { SelectModule } from 'app/lib/select/select.module';
import { SelectDemoComponent } from 'app/lib/select/select-demo/select-demo.component';
import { HomeComponent } from 'app/home/home.component';

@NgModule({
    imports: [
        BrowserModule,
        ButtonModule,
        CheckboxModule,
        VerticalTabsModule,
        SelectModule,
        RouterModule.forRoot(routes)
    ],
    declarations: [
        DemoComponent,
        HomeComponent,
        SideNavComponent,
        ButtonDemoComponent,
        CheckboxDemoComponent,
        ColorDemoComponent,
        SwatchDemoComponent,
        TableDemoComponent,
        SelectDemoComponent,
        VerticalTabsDemoComponent
    ]
})
export class DemoModule { }