//
//  HomeViewController.m
//  BViewDemo
//
//  Created by pingyandong on 16/7/25.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import "HomeViewController.h"

#import "RCTBundleURLProvider.h"
#import "RCTRootView.h"
@interface HomeViewController ()

@end

@implementation HomeViewController

- (void)viewDidLoad {
    [super viewDidLoad];
  self.view.backgroundColor = [UIColor whiteColor];
  UIButton *btn = [UIButton buttonWithType:UIButtonTypeCustom];
  [btn setTitle:@"加载RN View" forState:UIControlStateNormal];
  [btn addTarget:self action:@selector(test) forControlEvents:UIControlEventTouchUpInside];
  btn.backgroundColor =[UIColor redColor];
  btn.frame = CGRectMake(150, 200, 150, 60);
  [self.view addSubview:btn];
    // Do any additional setup after loading the view.
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

- (void)test
{
  NSURL *jsCodeLocation;
//#if DEBUG
  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index.ios" fallbackResource:nil];
//#else
//  jsCodeLocation = [CodePush bundleURL];
//#endif
  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"BViewDemo"
                                               initialProperties:nil
                                                   launchOptions:nil];
  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];
  rootView.frame = self.view.bounds;
  [self.view addSubview:rootView];
}


/*
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}
*/

@end
