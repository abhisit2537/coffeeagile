/*
 Copyright (c) 2012-2015, Pierre-Olivier Latour
 All rights reserved.
 
 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:
 * Redistributions of source code must retain the above copyright
 notice, this list of conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright
 notice, this list of conditions and the following disclaimer in the
 documentation and/or other materials provided with the distribution.
 * The name of Pierre-Olivier Latour may not be used to endorse
 or promote products derived from this software without specific
 prior written permission.
 
 THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 DISCLAIMED. IN NO EVENT SHALL PIERRE-OLIVIER LATOUR BE LIABLE FOR ANY
 DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

#import "GCDWebServerResponse.h"

<<<<<<< HEAD
NS_ASSUME_NONNULL_BEGIN

=======
>>>>>>> 4437ea2f09712aa0de9686399ca21f7ea2b27db2
/**
 *  The GCDWebServerDataResponse subclass of GCDWebServerResponse reads the body
 *  of the HTTP response from memory.
 */
@interface GCDWebServerDataResponse : GCDWebServerResponse
<<<<<<< HEAD
@property(nonatomic, copy) NSString* contentType;  // Redeclare as non-null
=======
>>>>>>> 4437ea2f09712aa0de9686399ca21f7ea2b27db2

/**
 *  Creates a response with data in memory and a given content type.
 */
+ (instancetype)responseWithData:(NSData*)data contentType:(NSString*)type;

/**
 *  This method is the designated initializer for the class.
 */
- (instancetype)initWithData:(NSData*)data contentType:(NSString*)type;

@end

@interface GCDWebServerDataResponse (Extensions)

/**
 *  Creates a data response from text encoded using UTF-8.
 */
<<<<<<< HEAD
+ (nullable instancetype)responseWithText:(NSString*)text;
=======
+ (instancetype)responseWithText:(NSString*)text;
>>>>>>> 4437ea2f09712aa0de9686399ca21f7ea2b27db2

/**
 *  Creates a data response from HTML encoded using UTF-8.
 */
<<<<<<< HEAD
+ (nullable instancetype)responseWithHTML:(NSString*)html;
=======
+ (instancetype)responseWithHTML:(NSString*)html;
>>>>>>> 4437ea2f09712aa0de9686399ca21f7ea2b27db2

/**
 *  Creates a data response from an HTML template encoded using UTF-8.
 *  See -initWithHTMLTemplate:variables: for details.
 */
<<<<<<< HEAD
+ (nullable instancetype)responseWithHTMLTemplate:(NSString*)path variables:(NSDictionary*)variables;
=======
+ (instancetype)responseWithHTMLTemplate:(NSString*)path variables:(NSDictionary*)variables;
>>>>>>> 4437ea2f09712aa0de9686399ca21f7ea2b27db2

/**
 *  Creates a data response from a serialized JSON object and the default
 *  "application/json" content type.
 */
<<<<<<< HEAD
+ (nullable instancetype)responseWithJSONObject:(id)object;
=======
+ (instancetype)responseWithJSONObject:(id)object;
>>>>>>> 4437ea2f09712aa0de9686399ca21f7ea2b27db2

/**
 *  Creates a data response from a serialized JSON object and a custom
 *  content type.
 */
<<<<<<< HEAD
+ (nullable instancetype)responseWithJSONObject:(id)object contentType:(NSString*)type;
=======
+ (instancetype)responseWithJSONObject:(id)object contentType:(NSString*)type;
>>>>>>> 4437ea2f09712aa0de9686399ca21f7ea2b27db2

/**
 *  Initializes a data response from text encoded using UTF-8.
 */
<<<<<<< HEAD
- (nullable instancetype)initWithText:(NSString*)text;
=======
- (instancetype)initWithText:(NSString*)text;
>>>>>>> 4437ea2f09712aa0de9686399ca21f7ea2b27db2

/**
 *  Initializes a data response from HTML encoded using UTF-8.
 */
<<<<<<< HEAD
- (nullable instancetype)initWithHTML:(NSString*)html;
=======
- (instancetype)initWithHTML:(NSString*)html;
>>>>>>> 4437ea2f09712aa0de9686399ca21f7ea2b27db2

/**
 *  Initializes a data response from an HTML template encoded using UTF-8.
 *
 *  All occurences of "%variable%" within the HTML template are replaced with
 *  their corresponding values.
 */
<<<<<<< HEAD
- (nullable instancetype)initWithHTMLTemplate:(NSString*)path variables:(NSDictionary*)variables;
=======
- (instancetype)initWithHTMLTemplate:(NSString*)path variables:(NSDictionary*)variables;
>>>>>>> 4437ea2f09712aa0de9686399ca21f7ea2b27db2

/**
 *  Initializes a data response from a serialized JSON object and the default
 *  "application/json" content type.
 */
<<<<<<< HEAD
- (nullable instancetype)initWithJSONObject:(id)object;
=======
- (instancetype)initWithJSONObject:(id)object;
>>>>>>> 4437ea2f09712aa0de9686399ca21f7ea2b27db2

/**
 *  Initializes a data response from a serialized JSON object and a custom
 *  content type.
 */
<<<<<<< HEAD
- (nullable instancetype)initWithJSONObject:(id)object contentType:(NSString*)type;

@end

NS_ASSUME_NONNULL_END
=======
- (instancetype)initWithJSONObject:(id)object contentType:(NSString*)type;

@end
>>>>>>> 4437ea2f09712aa0de9686399ca21f7ea2b27db2
