# Billionaire-Diary-resources

### Billionaire API: [https://forbes400.onrender.com/](https://forbes400.onrender.com/)
## https://forbes400.onrender.com/

===========================================================================================================
Path:/api/forbes400?limit=10                                                                              =
Example:https://forbes400.onrender.com/api/forbes400?limit=10                                             =
Description:Limits the forbes 400 api by the number specified by the limit query on the url               =
Params: query is ' ?limit=10 ' or any valid number                                                        =
1                                                                                                         =
============================================================================================================
Path:/api/forbes400/
Example:https://forbes400.onrender.com/api/forbes400/  ## c
Description:Returns a Json Object Of the richest people in the forbes 400 in descending order of rank
Params: null
2
============================================================================================================

Path:/api/forbes400/:filterBy

Example:https://forbes400.onrender.com/api/forbes400/youngest

Description:Returns a Json Object Of the richest people in the forbes 400 in descending order of rank which could be further filterBy any of the params below


Params: [ 'youngest', 'oldest', 'women or female', 'men or male', 'real-time' ]

3
============================================================================================================
Path:/forbes400/states/:state

Example:https://forbes400.onrender.com/api/forbes400/states/Texas   ## c

Description:Returns a Json Object Of the richest people in the forbes 400 in descending order of rank which is further filtered by the state of the individuals


Params: Any valid state in the Usa

4
============================================================================================================
Path:/forbes400/industries/:industry

Example:https://forbes400.onrender.com/api/forbes400/industries/technology  ## c

Description:Returns a Json Object Of the richest people in the forbes 400 in descending order of rank which can be further filterd by a specific industry your looking for


Params: Any valid industry i.e technology, fashion, finance, investments etc..

5
============================================================================================================
Path:/forbes400/getAllBillionaires

Example:https://forbes400.onrender.com/api/forbes400/getAllBillionaires

Description:Returns a Json Object of all the billionaires / richest people in the world


Params: null

6
============================================================================================================