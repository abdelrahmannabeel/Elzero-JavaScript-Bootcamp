let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

/// - Delimiter at the beginning and end of the regular expression pattern.

//http - Matches the literal characters "http".

//s? - Matches an optional "s" character. This allows the pattern to match both "http" and "https".

//:\/\/ - Matches the literal characters "://".

//(?:[-\w]+\.)? - This is a non-capturing group (?:...) that matches an optional sequence of one or more word characters (\w) or hyphens (-), followed by a dot (\.). The non-capturing group is used to group these elements together without capturing the result.

//([-\w]+) - This is a capturing group (...) that matches one or more word characters or hyphens. The captured group represents the subdomain in the URL.

//\. - Matches a dot character.

//\w+ - Matches one or more word characters. This represents the domain name.

//(?:\.\w+)? - This is another non-capturing group that matches an optional dot followed by one or more word characters. This group allows for matching subdomains or additional domain levels.

//\/? - Matches an optional forward slash character. This allows the pattern to match URLs with or without a trailing slash.

//.* - Matches any character (except newline) zero or more times. This represents the path and query parameters in the URL.

///i - Flags at the end of the regular expression. "i" is the case-insensitive flag, allowing the pattern to match URLs regardless of case.

//In summary, the regular expression matches URLs starting with either "http" or "https", followed by "://", an optional subdomain, a domain name, an optional dot and additional domain levels, an optional trailing slash, and any path or query parameters. The captured group represents the subdomain portion of the URL.

//? These strings match the pattern because they follow the structure of a URL with optional subdomains, different domain extensions, optional trailing slashes, and various paths or query parameters.

//http://www.example.com
//https://subdomain.example.co.uk
//http://www.example.com/
//https://subdomain.example.com/path/to/page
//http://example.com?param=value
//https://www.example.com/path/to/page?param1=value1&param2=value2
