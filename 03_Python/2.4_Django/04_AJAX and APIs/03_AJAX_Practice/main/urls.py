from django.urls import path
from main.views import (
    indexView,
    postFriend, 
    checkNickName
)

urlpatterns = [
    # ... other urls
    path('', indexView),
    path('post/ajax/friend', postFriend, name = "post_friend"),
    path('get/ajax/validate/nickname', checkNickName, name = "validate_nickname")
    # ...
]