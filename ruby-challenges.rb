# ASSESSMENT 4: Ruby Coding Practical Questions
# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.
def evenorodd()
    p "input your number"
    reposts= gets.chomp.to_i
        if reposts.even?
            p "#{reposts} is Even"
        else 
            p "#{reposts} is Odd"
        end
    end  
    p evenorodd
    # reposts1 = 7
    # Expected output: '7 is odd'
    # reposts2 = 42
    # Expected output: '42 is even'
    # reposts3 = 221
    # Expected output: '221 is odd'
    
    # -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
    # HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete
    
    beatles_album1 = 'Rubber Soul'
    p beatles_album1.delete('aeoiuAEIOU')
    # Expected output: 'Rbbr Sl' ✅
    
    beatles_album2 = 'Sgt Pepper'
    p beatles_album2.delete('aeoiuAEIOU')
    # Expected output: 'Sgt Pppr'✅
    
    beatles_album3 = 'Abbey Road'
    p beatles_album3.delete('aeoiuAEIOU')
    # Expected output: 'bby Rd'✅
    
    # -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.
    palindrome_test_case1 = 'Racecar'.downcase
    def is_pal (palindrome_test_case1)
            if palindrome_test_case1 == palindrome_test_case1.reverse
                " #{palindrome_test_case1.capitalize} is a palindrome"
            else 
                " #{palindrome_test_case1} is not a palindrome"
            end
        end
        
    p is_pal(palindrome_test_case1)
    # => Getting the opposite output than expected, tried to use the .downcase method but it isnt working, the only way it works is if I alter the 
    # 'palidronme_test_case1' variable with .downcase , but still in the answer will show "racecar is a palindrome" which gives me the word with lowercase. So what I did was to input a .capitalize on the print statement to fix that.
    # Expected output: 'Racecar is a palindrome'
    palindrome_test_case2 = 'LEARN'
    def pali_test(palindrome_test_case2)
        if palindrome_test_case2 == palindrome_test_case2.reverse
            "#{palindrome_test_case2} is a palindrome "
        else
            "#{palindrome_test_case2} is not a palindrome"
        end
    end
    p pali_test(palindrome_test_case2)
    # Expected output: 'LEARN is not a palindrome'
    palindrome_test_case3 = 'Rotator'.downcase
    def pali_test(palindrome_test_case3)
        if palindrome_test_case3 == palindrome_test_case3.reverse
            "#{palindrome_test_case3.capitalize} is a palindrome "
        else
            "#{palindrome_test_case3} is not a palindrome"
        end
    end
    p pali_test(palindrome_test_case3)
    # Expected output: 'Rotator is a palindrome'
    