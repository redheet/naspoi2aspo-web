import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // Home
  {
    path: '',
    loadChildren: () =>
      import('./components/pages/home/home.module').then((m) => m.HomeModule),
    data: { breadcrumb: 'Homepage' },
  },
  {
    path: 'naspo',
    loadChildren: () =>
      import('./components/pages/home-two/home-two.module').then(
        (m) => m.HomeTwoModule
      ),
    data: { breadcrumb: 'Homepage' },
  },
  // {
  //   path: 'home-v3',
  //   loadChildren: () =>
  //     import('./components/pages/home-three/home-three.module').then(
  //       (m) => m.HomeThreeModule
  //     ),
  //   data: { breadcrumb: 'Homepage' },
  // },
  {
    path: 'i2aspo',
    loadChildren: () =>
      import('./components/pages/home-four/home-four.module').then(
        (m) => m.HomeFourModule
      ),
    data: { breadcrumb: 'Homepage' },
  },
  // {
  //   path: 'home-v5',
  //   loadChildren: () =>
  //     import('./components/pages/home-five/home-five.module').then(
  //       (m) => m.HomeFiveModule
  //     ),
  //   data: { breadcrumb: 'Homepage' },
  // },
  // {
  //   path: 'home-v6',
  //   loadChildren: () =>
  //     import('./components/pages/home-six/home-six.module').then(
  //       (m) => m.HomeSixModule
  //     ),
  //   data: { breadcrumb: 'Homepage' },
  // },
  // // Services
  // {
  //   path: 'services',
  //   loadChildren: () =>
  //     import('./components/pages/services/services.module').then(
  //       (m) => m.ServicesModule
  //     ),
  //   data: { breadcrumb: 'Services' },
  // },
  // {
  //   path: 'service-details/:id',
  //   loadChildren: () =>
  //     import('./components/pages/service-details/service-details.module').then(
  //       (m) => m.ServiceDetailsModule
  //     ),
  //   data: { breadcrumb: 'Service Details' },
  // },
  // Pricing
  // {
  //   path: 'pricing',
  //   loadChildren: () =>
  //     import('./components/pages/pricing/pricing.module').then(
  //       (m) => m.PricingModule
  //     ),
  //   data: { breadcrumb: 'Pricing' },
  // },
  // Pages
  // {
  //   path: 'about',
  //   loadChildren: () =>
  //     import('./components/pages/about/about.module').then(
  //       (m) => m.AboutModule
  //     ),
  //   data: { breadcrumb: 'About Us' },
  // },
  {
    path: 'gallery',
    loadChildren: () =>
      import('./components/pages/team/team.module').then((m) => m.TeamModule),
    data: { breadcrumb: 'Gallery' },
  },
  // {
  //   path: 'coming-soon',
  //   loadChildren: () =>
  //     import('./components/pages/coming-soon/coming-soon.module').then(
  //       (m) => m.ComingSoonModule
  //     ),
  //   data: { breadcrumb: 'Coming Soon' },
  // },
  // {
  //   path: 'error',
  //   loadChildren: () =>
  //     import('./components/pages/error-page/error-page.module').then(
  //       (m) => m.ErrorPageModule
  //     ),
  //   data: { breadcrumb: 'Error 404' },
  // },
  // // Blog
  // {
  //   path: 'blog/search/:query',
  //   loadChildren: () =>
  //     import('./components/pages/blog-grid/blog-grid.module').then(
  //       (m) => m.BlogGridModule
  //     ),
  //   data: { breadcrumb: 'Blog Grid' },
  // },
  // {
  //   path: 'blog/cat/:catId',
  //   loadChildren: () =>
  //     import('./components/pages/blog-grid/blog-grid.module').then(
  //       (m) => m.BlogGridModule
  //     ),
  //   data: { breadcrumb: 'Blog Grid' },
  // },
  // {
  //   path: 'blog/tag/:tagId',
  //   loadChildren: () =>
  //     import('./components/pages/blog-grid/blog-grid.module').then(
  //       (m) => m.BlogGridModule
  //     ),
  //   data: { breadcrumb: 'Blog Grid' },
  // },
  // {
  //   path: 'blog/author/:authorId',
  //   loadChildren: () =>
  //     import('./components/pages/blog-grid/blog-grid.module').then(
  //       (m) => m.BlogGridModule
  //     ),
  //   data: { breadcrumb: 'Blog Grid' },
  // },
  // {
  //   path: 'blog-grid',
  //   loadChildren: () =>
  //     import('./components/pages/blog-grid/blog-grid.module').then(
  //       (m) => m.BlogGridModule
  //     ),
  //   data: { breadcrumb: 'Blog Grid' },
  // },
  // {
  //   path: 'blog-standard',
  //   loadChildren: () =>
  //     import('./components/pages/blog-list/blog-list.module').then(
  //       (m) => m.BlogListModule
  //     ),
  //   data: { breadcrumb: 'Blog Standard' },
  // },
  // {
  //   path: 'blog-details/:id',
  //   loadChildren: () =>
  //     import('./components/pages/blog-details/blog-details.module').then(
  //       (m) => m.BlogDetailsModule
  //     ),
  //   data: { breadcrumb: 'Blog Details' },
  // },
  // Contact
  {
    path: 'contact',
    loadChildren: () =>
      import('./components/pages/contact/contact.module').then(
        (m) => m.ContactModule
      ),
    data: { breadcrumb: 'Contact Us' },
  },
  {
    path: '**',
    loadChildren: () =>
      import('./components/pages/error-page/error-page.module').then(
        (m) => m.ErrorPageModule
      ),
    data: { breadcrumb: 'Error 404' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
