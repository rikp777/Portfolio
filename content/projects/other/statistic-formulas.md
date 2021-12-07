---
  title: Statistic 1  
  description:
    Formulas explained 
  duration: 2 whole day in total
  image: /images/projects/minor/statistics/statistics.jpg
  tech:
    - name: math
    - name: statistics 
  category:
    - name: body of knowledge
    - name: minor
  author:
    name: Rik Peeters
    image: /images/me.jpg
    social:
      twitter: rikp777
  slug: other_statistic-formulas
  createdAt: 2021-11-19
---
small
I am a visual learner so I find it hard to understand material by just reading it I have to make myself visual illustrations this has done both the khan cource for me and the many notes I have made. 

# Statistical formulas

## Summarizing quantitative data

### quantitative data

#### Mean

When you first started out in mathematics, you were probably taught that an average was a “middling” amount for a set of numbers. You added up the numbers, divided by the number of items you can and *voila*! you get the average. For example, the average of 10, 5 and 20 is:

10 + 6 + 20 = 36 / 3 = 12.

The you started studying statistics and all of a sudden the “average” is now called the mean. *What happened?* The answer is that they have the same meaning(they are synonyms).

#### Mode 

The mode is the value that appears most frequently in a data set. A set of data may have one mode, more than one mode, or no mode at all. Other popular measures of central tendency include the mean, or the average of a set, and the [median](https://www.investopedia.com/terms/m/median.asp), the middle value in a set.

#### Median

The median is the middle number in a sorted, ascending or descending, list of numbers and can be more descriptive of that data set than the average. 

Median is the middle number in a sorted list of numbers. To determine the median value in a sequence of numbers, the numbers must first be sorted, or arranged, in value order from lowest to highest or highest to lowest. The median can be used to determine an approximate average, or [mean](https://www.investopedia.com/terms/m/mean.asp), but is not to be confused with the actual mean.

The absolute middle of an ordered ascending set of numbers. 

### Interquartile range (IQR)

When a data set has outliers or extreme values, we summarize a typical value using the ***median\*** as opposed to the mean. When a data set has outliers, variability is often summarized by a statistic called the ***interquartile range\***, which is the difference between the first and third quartiles. The first quartile, denoted Q1, is the value in the data set that holds 25% of the values *below* it. The third quartile, denoted Q3, is the value in the data set that holds 25% of the values *above* it. The quartiles can be determined following the same approach that we used to determine the median, but we now consider each half of the data set separately. 

It kind of is like the mean of every 50% of the set.

#### Example 

##### Normal

Set: 62, 63, | 64 |, 64, 70, || 72, 76, | 77 |, 81,81

Median = (70 + 72) / 2 = 71

Mean = 71

Q1 = 64

Q3 = 77



##### Odd number

Set:  63, | 64 , 64 |, 70, | 72 |, 76, | 77, 81 | ,81

Median = 72

Mean = 72

Q1 = (64 + 64) / 2 = 64

Q3 = (77 + 81) / 2 = 79

### Variance and standard deviation of a population

Interestingly, in the real world no statistician would ever calculate standard deviation by hand. The calculations involved are somewhat complex, and the risk of making a mistake is high. Also, calculating by hand is slow. Very slow. This is why statisticians rely on spreadsheets and computer programs to crunch their numbers.

#### Population

The formula for standard deviation (SD) is:

<img src="https://latex.codecogs.com/svg.latex?\color{Magenta}\Large&space;\text{SD} /= \sqrt{\dfrac{\sum\limits_{}^{}{{\lvert x- \mu \rvert^2}}}{N}}" title="formula" />

where ∑ sum means "sum of", x is a value in the data set, μ is the mean of the data set, and *N* is the number of data points in the population.

The standard deviation formula may look confusing, but it will make sense after we break it down. In the coming sections, we'll walk through a step-by-step interactive example. Here's a quick preview of the steps we're about to follow:

#### Sample

The formula above is for finding the standard deviation of a population. If you're dealing with a sample, you'll want to use a slightly different formula (below), which uses n-1,  instead of *N*. 

<img src="https://latex.codecogs.com/svg.latex?\color{Magenta}\Large&space;\text{SD} = \sqrt{\dfrac{\sum\limits_{}^{}{{\lvert x- \bar{x} \rvert^2}}}{n -1}}" title="formula" />



### Mean absolute deviation (MAD)

The mean absolute deviation of a dataset is the average distance between each data point and the mean. It gives us an idea about the variability in a dataset.

Here's how to calculate the mean absolute deviation.

**Step 1:** Calculate the mean.

**Step 2:** Calculate how far away each data point is from the mean using positive distances. These are called absolute deviations.

**Step 3:** Add those deviations together.

**Step 4:** Divide the sum by the number of data points.

Following these steps in the example below is probably the best way to learn about mean absolute deviation, but here is a more formal way to write the steps in a formula:

<img src="https://latex.codecogs.com/svg.latex?\color{Magenta}\Large&space;\text{MAD} = \dfrac{\sum\limits_{}^{}{{\lvert x_{i}- \bar{x} \rvert}}}{n}" title="formula" />



## Modeling data distributions

### Distribution

#### Normal

The normal distribution is the most common type of distribution assumed in technical stock market analysis and in other types of statistical analyses. The standard normal distribution has two parameters: the mean and the [standard deviation](https://www.investopedia.com/terms/s/standarddeviation.asp). For a normal distribution, 68% of the observations are within +/- one standard deviation of the mean, 95% are within +/- two standard deviations, and 99.7% are within +- three standard deviations.

##### Empirical rule 

In statistics, the empirical rule states that 99.7% of data occurs within three standard deviations of the mean within a normal distribution. To this end, 68% of the observed data will occur within the first standard deviation, 95% will take place in the second deviation, and 97.5% within the third standard deviation. The empirical rule predicts the probability distribution for a set of outcomes. 

The empirical rule is applied to anticipate probable outcomes in a normal distribution. For instance, a statistician would use this to estimate the percentage of cases that fall in each standard deviation. Consider that the standard deviation is 3.1 and the mean equals 10. In this case, the first standard deviation would range between (10+3.2)= 13.2 and (10-3.2)= 6.8. The second deviation would fall between 10 + (2 X 3.2)= 16.4 and 10 - (2 X 3.2)= 3.6, and so forth. 

#### Skewness

##### Left

A **[left-skewed distribution](https://www.statisticshowto.com/probability-and-statistics/skewed-distribution/#SkewLeft)** has a long left tail. Left-skewed distributions are also called *negatively-skewed* distributions. That’s because there is a [long tail](https://www.statisticshowto.com/long-tail-distribution/) in the negative direction on the number line. The mean is also to the left of the [peak](https://www.statisticshowto.com/peak-of-a-distribution/).

In most cases, the [mean ](https://www.statisticshowto.com/probability-and-statistics/statistics-definitions/mean-median-mode/#mean)is to the left of the median. This isn’t a reliable test for skewness though, as some distributions (i.e. many [multimodal distributions](https://www.statisticshowto.com/multimodal-distribution/)) violate this rule. You should think of this as a “general idea” kind of rule, and not a set-in-stone one.

##### Right

A **[right-skewed distribution](https://www.statisticshowto.com/probability-and-statistics/skewed-distribution/#SkewRight)** has a long right tail. Right-skewed distributions are also called positive-skew distributions. That’s because there is a long tail in the positive direction on the number line. The [mean ](https://www.statisticshowto.com/probability-and-statistics/statistics-definitions/mean-median-mode/#mean)is also to the right of the peak.

On a right-skewed histogram, the mean, median, and mode are all different. In this case, the mode is the highest point of the histogram, whereas the median and mean fall to the right of it (or, visually, the right of the peak). Note that [the mean will *always* be to the right of the median](http://www.statisticshowto.com/skewed-distribution/).

### Percentile Formula

**Percentile = (Number of Values Below “x” / Total Number of Values) × 100**

P = (n/N) × 100

Where, 

- n = ordinal rank of the given value or value below the number
- N = number of values in the data set 
- P = percentile 

Or 

Percentile = (Number of Values Below “x” / Total Number of Values) × 100

### Z-scores

**Simply put, a z-score (also called a \*standard score\*) gives you an idea of how far from the [mean](https://www.statisticshowto.com/probability-and-statistics/statistics-definitions/mean-median-mode/) a data point is.** But more technically it’s a measure of how many [standard deviations](https://www.statisticshowto.com/probability-and-statistics/standard-deviation/) below or above the [population mean ](https://www.statisticshowto.com/population-mean/)a [raw score](https://www.statisticshowto.com/raw-score/) is.

A z-score can be placed on a [**normal distribution**](https://www.statisticshowto.com/probability-and-statistics/normal-distributions/) curve. Z-scores range from -3 standard deviations (which would fall to the far left of the normal distribution curve) up to +3 standard deviations (which would fall to the far right of the normal distribution curve). In order to use a z-score, you need to know the [mean](https://www.statisticshowto.com/probability-and-statistics/statistics-definitions/mean-median-mode/#mean) μ and also the population standard deviation σ.

#### Bases 

Simply put, a z-score (also called a standard score) gives an idea of how far away it is from the mean value of a data point. More technically, it is a measure of the number of standard deviations below or above the given population that signify a raw score.

De basis z-scoreformule voor een steekproef is:

z = (x – μ) / σ

where:

- **x:** individual data value
- **μ:** population mean
- **σ:** population standard deviation

A z-score for an individual value can be interpreted as follows:

- **Positive z-score:** The individual value is greater than the mean.
- **Negative z-score:** The individual value is less than the mean.
- **A z-score of 0:** The individual value is equal to the mean.

##### Example

For example, let's say you have a test score of 190. The test has a mean (μ) of 150 and a standard deviation (σ) of 25. Assuming a normal distribution, your z score would be:

z = (x – μ) / σ

= 190 – 150 / 25 = 1.6.

The z-score tells you as many standard deviations from the mean of your score. In this example, your score is 1.6 standard deviations above the mean.

#### Standard error of the mean

If you have multiple samples and want to describe the standard deviation of those samples (the standard deviation), you would use this z-score formula:

z = (x – μ) / (σ / √n)

This z-score tells you that there are many standard errors between the sample mean and the population mean.

##### Example

In general, the average height of women is 65″ with a standard deviation of 3.5″. What is the probability of finding a random sample of 50 women with a mean height of 70″, assuming the heights are normally distributed?

z = (x – μ) / (σ / √n)

= (70 – 65) / (3.5/√50) = 5 / 0.495 = 10.1

## Probability

Randomness is all around us. Probability theory is the mathematical framework that allows us to analyze chance events in a logically sound manner. The probability of an event is a number indicating how likely that event will occur. This number is always between 0 and 1, where 0 indicates impossibility and 1 indicates certainty.

A classic example of a probabilistic experiment is a fair coin toss, in which the two possible outcomes are heads or tails. In this case, the probability of flipping a head or a tail is 1/2. In an actual series of coin tosses, we may get more or less than exactly 50% heads. But as the number of flips increases, the long-run frequency of heads is bound to get closer and closer to 50%.

<img src="https://latex.codecogs.com/svg.latex?\color{Magenta}\Large&space;P(E)=\sum _{x\in E}f(x)\,." title="formula" />



```P(A) = (# of ways A can happen) / (Total number of outcomes)```

- The probability of an event can only be between 0 and 1 and can also be written as a percentage or fraction.
- The probability of event *A* is often written as ```P(A)```.
- If ```P(A) > P(B)```,  then event *A* has a higher chance of occurring than event *B*.
- If ```P(A) = P(B)```, then events *A* and *B* are equally likely to occur.

## Combinations and Permutations

The difference between combinations and permutations is ordering. **With permutations we care about the order of the elements, whereas with combinations we don’t.**

For example, say your locker “combo” is 5432. If you enter 4325 into your locker it won’t open because it is a different ordering (aka permutation).

The **permutations** of 2, 3, 4, 5 are:

- **5432,** 5423, 5324, 5342, 5234, 5243, 4532, 4523, 4325, 4352, 4253, 4235, 3542, 3524, 3425, 3452, 3254, 3245, 2543, 2534, 2435, 2453, 2354, 2345

  24 combinations

Your locker “combo” is a specific permutation of 2, 3, 4 and 5. If your locker worked truly by combination, you could enter any of the above permutations and it would open!

Suppose you want to know how many permutations exist of the numbers 2, 3, 4, 5 without listing them like I did above. How would you accomplish this?

Using the *Multiplication Principle of combinatorics,* we know that if there are *x* ways of doing one thing and *y* ways of doing another, then the total number of ways of doing both things is *x•y*. That means we need to multiply to find the total permutations.

This is a great opportunity to use shorthand **factorial notation (!)**:

4! = 4*•*3*•*2*•*1 = 24

There are 24 permutations, which matches the listing we made at the beginning of this post.

### Permutations with Repetition

What if I wanted to find the total number of permutations involving the numbers 2, 3, 4, and 5 but want to include orderings such as 5555 or 2234 where not all of the numbers are used, and some are used more than once?
How many of these permutations exist?
This turns out to be a simple calculation. Again we are composing a 4-digit number, so draw 4 lines to represent the digits.

4•4•4•4 = 4^4 = 256

### Combinations Formula

If we have *n* objects and we want to choose *k* of them*,* we can find the total number of combinations by using the following formula:

<img src="https://latex.codecogs.com/svg.latex?\color{Magenta}\Large&space;(\dfrac{n}{k}) = \dfrac{n!}{k!(n-k)!}" title="formula" />

For example, we have 52 cards (n=52) and want to know how many 5-card hands (k=5) we can make.

Plugging in the values we get:

<img src="https://latex.codecogs.com/svg.latex?\color{Magenta}\Large&space;(\dfrac{52}{5}) = \dfrac{52!}{5!(52-5)!}" title="formula" />

### Permutations Formula

The formula for permutations is similar to the combinations formula, except we needn’t divide out the permutations, so we can remove k! from the denominator:

<img src="https://latex.codecogs.com/svg.latex?\color{Magenta}\Large&space;(\dfrac{n}{k}) = \dfrac{n!}{(n-k)!}" title="formula" />



sources: 

[datascience.eu](https://datascience.eu/nl/wiskunde-statistiek/wat-is-een-z-score/)

[Khan Academy](https://www.khanacademy.org/math/statistics-probability)

[investopedia](https://www.investopedia.com/terms/n/normaldistribution.asp)

[statology](https://www.statology.org/comparing-z-scores/)

[investopedia](https://www.investopedia.com/terms/e/empirical-rule.asp)

[sphweb.bumc.bu.edu](https://sphweb.bumc.bu.edu/otlt/mph-modules/bs/bs704_summarizingdata/bs704_summarizingdata7.html)

[medium](https://medium.com/i-math/combinations-permutations-fa7ac680f0ac)

[seeing-theory.brown.edu](https://seeing-theory.brown.edu/basic-probability/index.html)
