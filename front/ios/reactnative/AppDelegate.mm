#import <GoogleMaps/GoogleMaps.h>
#import "AppDelegate.h"
#import <React/RCTBundleURLProvider.h>
#import "ReactNativeConfig.h"  // react-native-config 사용

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  NSString *apiKey = [[ReactNativeConfig env] objectForKey:@"GOOGLE_MAPS_API_KEY"]; // 환경 변수에서 API 키 가져오기
  [GMSServices provideAPIKey:apiKey]; // add this line using the api key from .env
  self.moduleName = @"reactnative";
  self.initialProps = @{};

  return [super application:application didFinishLaunchingWithOptions:launchOptions];
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
  return [self bundleURL];
}

- (NSURL *)bundleURL
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

@end
